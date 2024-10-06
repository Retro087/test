import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import x from "../../img/Union.png";
import succ from "../../img/Icon.png";

const Popup = (props) => {
  useEffect(() => {
    if (props.open) {
      setTimeout(() => {
        props.setOpen(false);
      }, 4000);
    }
  });
  if (!props.open) {
    return "";
  }
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div
          onClick={() => {
            props.setOpen(false);
          }}
          className={s.x}
        >
          <img src={x} alt="" />
        </div>
        <div className={s.succ}>
          <img src={succ} alt="" />
        </div>
        <p className={s.text}>Изменения сохранены!</p>
      </div>
    </div>
  );
};

export default Popup;
