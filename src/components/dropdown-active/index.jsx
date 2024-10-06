import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

const DropDownActive = (props) => {
  return (
    <div className={s.drop}>
      <div className={s.container}>
        <div>
          <Link to={`/edit/${props.id}`}>
            <button onClick={() => {}} className={s.item}>
              Редактировать
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              props.inArchive(props.id);
              props.setIsOpen(false);
            }}
            className={s.item}
          >
            Архивировать
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              props.deleteUser(props.id);
              props.setIsOpen(false);
            }}
            className={s.itemLast}
          >
            Скрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownActive;
