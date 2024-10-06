import React from "react";
import s from "./style.module.css";

const DropDownArchive = (props) => {
  return (
    <div className={s.drop}>
      <div className={s.container}>
        <div>
          <button
            onClick={() => {
              props.inActive(props.id);
              props.setIsOpen(false);
            }}
            className={s.item}
          >
            Активировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownArchive;
