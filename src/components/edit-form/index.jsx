import React, { useState } from "react";
import photo from "../../img/photo.png";
import s from "./style.module.css";
import arrow from "../../img/arrow-left.png";
import { Link } from "react-router-dom";
const EditForm = (props) => {
  const [name, setName] = useState(props.user.name);
  const [nick, setNick] = useState(props.user.username);
  const [mail, setMail] = useState(props.user.email);
  const [city, setCity] = useState(props.user.address.city);
  const [number, setNumber] = useState(props.user.phone);
  const [company, setCompany] = useState(props.user.company.name);
  const [err, setErr] = useState(null);
  return (
    <>
      <Link
        onClick={() => {
          props.resetUser();
        }}
        className={s.link}
        to={"/"}
      >
        <div className={s.back}>
          <div className={s.arr}>
            <img src={arrow} alt="" />
          </div>

          <span className={s.backText}>Назад</span>
        </div>
      </Link>

      <div className={s.edit}>
        <div className={s.leftside}>
          <div className={s.icon}>
            <img src={photo} alt="" />
          </div>
          <ul className={s.list}>
            <li className={s.itemActive}>Данные профиля</li>
            <li className={s.item}>Рабочее пространство</li>
            <li className={s.item}>Приватность</li>
            <li className={s.item}>Безопасность</li>
          </ul>
        </div>
        <div className={s.formBlock}>
          <p className={s.title}>Данные профиля</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                name.length === 0 ||
                nick.length === 0 ||
                mail.length === 0 ||
                city.length === 0 ||
                number.length === 0 ||
                company.length === 0
              ) {
                setErr("Поля не могут быть пустыми!");
              } else {
                setErr(null);
                props.updateUser({
                  id: props.user.id,
                  name,
                  nick,
                  mail,
                  city,
                  number,
                  company,
                });
                props.setOpen(true);
              }
            }}
            action=""
            className={s.form}
          >
            <div className={s.inputBlock}>
              <p className={s.inputText}>Имя</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={s.input}
                type="text"
                placeholder=""
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputText}>Никнейм</p>
              <input
                onChange={(e) => setNick(e.target.value)}
                value={nick}
                className={s.input}
                type="text"
                placeholder=""
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputText}>Почта</p>
              <input
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                className={s.input}
                type="text"
                placeholder=""
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputText}>Город</p>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className={s.input}
                type="text"
                placeholder=""
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputText}>Телефон</p>
              <input
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className={s.input}
                type="text"
                placeholder=""
              />
            </div>
            <div className={s.inputBlock}>
              <p className={s.inputText}>Название компании</p>
              <input
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                className={s.input}
                type="text"
                placeholder=""
              />
            </div>
            {err ? <p>{err}</p> : null}
            <button type="submit" className={s.btn}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditForm;
