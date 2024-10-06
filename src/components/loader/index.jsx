import React from "react";
import s from "./style.module.css";
import loader from "../../img/loader.gif";
const Loader = () => {
  return (
    <div className={s.loader}>
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
