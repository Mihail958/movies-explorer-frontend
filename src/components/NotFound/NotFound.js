import React from "react";
import { Link, useHistory} from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const history = useHistory();
  function handleGoBack() {
    history.goBack();
} 

  return (
    <section className="not-found">
      <h1 className="not-found__status">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <Link className="not-found__back" onClick={handleGoBack}>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;