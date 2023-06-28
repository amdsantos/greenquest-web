import "./Login.css";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

import Logo from "../../assets/img/logo.svg";
import Google from "../../assets/img/google.svg";
import Card from "../../components/Card/Card";

const apiKey = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

const Login = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <div className="login">
      <Card>
        <img
          src={Logo}
          alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
          className="login__logo"
        />

        <button onClick={() => login()} className="btn btn-secondary">
          <img src={Google} alt="Logo do Google" />
          Entre com o Google
        </button>

        <div className="login__divider">ou</div>

        <form className="login__form">
          <div>
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              id="login-email"
              required
            />
          </div>
          <div>
            <label htmlFor="login-password">Senha</label>
            <input
              type="password"
              placeholder="**************"
              id="login-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>

          <p className="login__form__text">
            Não possui conta? Registre-se <Link to="/register">aqui</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
