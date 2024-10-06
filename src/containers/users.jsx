import React, { useCallback, useEffect } from "react";
import UsersList from "../components/users-active-list";
import UsersActiveList from "../components/users-active-list";
import UsersArchiveList from "../components/users-archive-list";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsers,
  inActive,
  inArchive,
} from "../store/users/usersSlice";
import Loader from "../components/loader";

const Users = () => {
  const select = useSelector((state) => ({
    isFetching: state.users.isFetching,
    users: state.users.users,
    archive: state.users.archive,
  }));
  const callbacks = {
    inArchive: useCallback((id) => dispatch(inArchive(id)), []),
    inActive: useCallback((id) => dispatch(inActive(id)), []),
    deleteUser: useCallback((id) => dispatch(deleteUser(id)), []),
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (select.isFetching) {
    return <Loader />;
  }

  return (
    <>
      <UsersActiveList
        deleteUser={callbacks.deleteUser}
        inArchive={callbacks.inArchive}
        users={select.users}
      />
      <UsersArchiveList inActive={callbacks.inActive} users={select.archive} />
    </>
  );
};

export default Users;
