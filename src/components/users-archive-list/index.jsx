import React from "react";
import ActiveItem from "../active-item";
import s from "./style.module.css";
import ArchiveItem from "../archive-item";
const UsersArchiveList = (props) => {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Архив</p>
      <div className={s.list}>
        {props.users.map((i, index) => {
          return <ArchiveItem inActive={props.inActive} key={index} item={i} />;
        })}
      </div>
    </div>
  );
};

export default UsersArchiveList;
