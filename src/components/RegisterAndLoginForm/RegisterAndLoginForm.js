import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import '../RegisterAndLoginForm/RegisterAndLoginForm.css';

function RegisterAndLoginForm(props) {
  return (
    <div className="form">
      <div className="form__box-header">
        <Link className="form__header-link" to="/">
          <img
            className="button form__logo"
            type="button"
            src={logo}
            alt="Лоотип"
          />
        </Link>
        <p className="form__header">{props.title}</p>
      </div>
      {props.children}
      <p className="form__text-link">
        {props.question}
        <Link to="/signin" className="link form__link">
          {props.link}
        </Link>
      </p>
    </div>
  );
}

export default RegisterAndLoginForm;