import React from "react";
import ActiveItem from "../active-item";
import s from "./style.module.css";
const UsersActiveList = (props) => {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Активные</p>
      <div className={s.list}>
        {props.users.map((i, index) => {
          return (
            <ActiveItem
              deleteUser={props.deleteUser}
              inArchive={props.inArchive}
              key={index}
              item={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersActiveList;
