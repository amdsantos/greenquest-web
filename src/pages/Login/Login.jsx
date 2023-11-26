import "./Login.css";

import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import Logo from "../../assets/images/logo.svg";
import Google from "../../assets/images/google.svg";
import Card from "../../components/Card/Card";

import { getUserMethod, setUserMethod } from "./LoginService";

const Login = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUserMethod(codeResponse);
      navigate("/");
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const userData = getUserMethod();

  useEffect(() => {
    if (userData) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUserMethod(res);
          navigate("/");
        })
        .catch((err) => console.log({ err }));
    }
  }, [userData]);

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
            />
          </div>
          <div>
            <label htmlFor="login-password">Senha</label>
            <input
              type="password"
              placeholder="**************"
              id="login-password"
            />
          </div>

          <Link to={"/"}>
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </Link>

          <p className="login__form__text">
            Não possui conta? Registre-se <Link to="/register">aqui</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
