import React, { useCallback, useEffect, useState } from "react";
import EditForm from "../components/edit-form";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser, resetUser, updateUser } from "../store/users/usersSlice";
import Popup from "../components/popup";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const select = useSelector((state) => ({
    user: state.users.user,
    userUpdated: state.users.userUpdated,
  }));
  const [open, setOpen] = useState(false);

  const callback = {
    updateUser: useCallback((user) => {
      dispatch(updateUser(user));
    }, []),
    resetUser: useCallback(() => {
      dispatch(resetUser());
    }, []),
  };

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  if (!select.user) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      <EditForm
        resetUser={callback.resetUser}
        updateUser={callback.updateUser}
        user={select.user}
        setOpen={setOpen}
      />
      <Popup setOpen={setOpen} open={open} />
    </div>
  );
};

export default Edit;
