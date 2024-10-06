import React from "react";
import s from "./style.module.css";
import logo from "../../img/logo.png";
import favorite from "../../img/Favorite.png";
import notific from "../../img/Notification.png";
import photo from "../../img/photo.png";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={s.actions}>
          <div className={s.btns}>
            <img src={favorite} alt="" />
            <img src={notific} alt="" />
          </div>
          <div className={s.profile}>
            <div className={s.photo}>
              <img src={photo} alt="" />
            </div>

            <p className={s.text}>Ivan1234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
