import '../Profile/Profile.css';
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { Link } from "react-router-dom";
import Header from '../Header/Header';



function Profile(props) {

  const currentUser = useContext(CurrentUserContext);

  const [readOnly, setReadOnly] = useState(true);
  const [nameProfile, setNameProfile] = useState("");
  const [emailProfile, setEmailProfile] = useState("");
  const [dataDirty, setDataDirty] = useState(false);
  const [dataSuccess, setDataSuccess] = useState("")
  const [dataError, setDataError] = useState("");

  const [formValid, setFormValid] = useState(false);
  const disabledBtn =
    currentUser.email === emailProfile && currentUser.name === nameProfile;

  useEffect(() => {
    setReadOnly(true);
  }, []);

  useEffect(() => {
    if (dataError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [dataError]);

  useEffect(() => {
    setNameProfile(currentUser.name);
    setEmailProfile(currentUser.email);
  }, [currentUser]);

  function handleClickEdit(e) {
    e.preventDefault();
    setReadOnly(false);
    setDataSuccess("");
  }

  function handleChangeName(e) {
    setNameProfile(e.target.value);
    if (
      (!e.target.validity.valid && e.target.value.length < 3) ||
      e.target.value.length > 20
    ) {
      setDataError(
        "Что-то пошло не так. Имя не должно быть пустым или некорректный Email"
      );
      setDataSuccess("");
      if (!e.target.value) {
        setDataError("Имя не может быть пустым");
        setDataSuccess("");
      }
    } else {
      setDataError("");
      setDataSuccess("");
    }
  }

  function handleChangeEmail(e) {
    setEmailProfile(e.target.value);
    if (
      !String(e.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setDataError(
        "Что-то пошло не так. Имя не должно быть пустым или некорректный Email"
      );
      setDataSuccess("");
      if (!e.target.value) {
        setDataError("Email не может быть пустым");
        setDataSuccess("");
      }
    } else {
      setDataError("");
      setDataSuccess("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: nameProfile,
      email: emailProfile,
    });
    setDataSuccess("Профиль был успешно изменен");
    setReadOnly(true);
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case "nameprofile":
        setDataDirty(true);
        break;
      case "emailprofile":
        setDataDirty(true);
        break;
      default:
        break;
    }
  }

    return (
      <div className="profile">
        <Header />
        <form
          className="profile__form"
          action="/"
          name="formprofile"
          onSubmit={handleSubmit}
        >
          <p className="profile__greeting">Привет, {currentUser.name}!</p>
          <div className="profile__box-profile-info">
            <div className="profile__profile-info">
              <p className="profile__info">Имя</p>
              <input
                className="profile__input"
                type="text"
                name="nameprofile"
                id="nameprofile"
                minLength="2"
                maxLength="20"
                value={nameProfile ? nameProfile : ""}
                onChange={handleChangeName}
                required
                readOnly={readOnly}
                onBlur={blurHandler}
                autoComplete="off"
              />
            </div>
            <hr className="profile__line" />
            <div className="profile__profile-info">
              <p className="profile__info">E-mail</p>
              <input
                className="profile__input"
                id="emailprofile"
                name="emailprofile"
                minLength="2"
                maxLength="100"
                value={emailProfile ? emailProfile : ""}
                onChange={handleChangeEmail}
                required
                readOnly={readOnly}
                onBlur={blurHandler}
                autoComplete="off"
              />
            </div>
            {dataDirty && dataError && (
              <div className='profile__error'>{dataError}</div>
            )}
            {dataDirty && dataSuccess && (
              <div className='profile__success'>{dataSuccess}</div>
            )}
          </div>
          {!readOnly ? (
            <button
              className="button profile__button-edit profile__button-edit:disabled"
              disabled={!formValid || disabledBtn}
            >
              Сохранить
            </button>
          ) : (
            <button
              className="button profile__button-edit"
              onClick={handleClickEdit}
            >
              Редактировать
            </button>
          )}
        </form>
        <Link
          className="profile__link-exit"
          to="/"
          onClick={props.handleSignOut}
        >
          Выйти из аккаунта
        </Link>
      </div>
    );
  }

export default Profile;
