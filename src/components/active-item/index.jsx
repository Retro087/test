import React, { useState } from "react";
import photo from "../../img/photo.png";
import s from "./style.module.css";
import dots from "../../img/dots.png";

import DropDownActive from "../dropdown-active";
const ActiveItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.user}>
      <div className={s.container}>
        <div className={s.icon}>
          <img src={photo} alt="" />
        </div>
        <div className={s.text}>
          <p className={s.name}>{props.item.name}</p>
          <p className={s.work}>{props.item.company.name}</p>
          <p className={s.city}>{props.item.address.city}</p>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={s.dots}
          >
            <img src={dots} alt="" />
          </div>
        </div>
      </div>
      {isOpen ? (
        <DropDownActive
          deleteUser={props.deleteUser}
          setIsOpen={setIsOpen}
          inArchive={props.inArchive}
          id={props.item.id}
        />
      ) : null}
    </div>
  );
};

export default ActiveItem;
