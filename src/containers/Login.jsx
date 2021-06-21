import "../assets/styles/components/Login.scss";
import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/static/path828.png";
import twitterIcon from "../assets/static/path1244.png";
const Login = () => (
  <section className="login">
    <div className="login__container">
      <h2 tabindex="0">Inicia Sesión</h2>
      <form className="login__container--form" action="">
        <input
          aria-label="Correo"
          className="input"
          type="text"
          placeholder="Correo"
        />

        <input
          aria-label="Contraseña"
          className="input"
          type="password"
          placeholder="Contraseña"
        />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember">
          <label>
            <input type="checkbox" id="cbox1" />
            Recordarme
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} /> Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} /> Inicia sesión con Twitter
        </div>
      </section>
      <Link to="register">
        <p className="login__container--register">
          No tienes ninguna cuenta <a href="">Regístrate</a>
        </p>
      </Link>
    </div>
  </section>
);
export default Login;
