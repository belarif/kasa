import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="error-message">
        <h1>404</h1>
        <p>Oups! la page que vous demandez n'existe pas.</p>
        <Link to="/">Retour à la page d'accueil</Link>
      </main>
    </React.Fragment>
  );
};

export default Error;
