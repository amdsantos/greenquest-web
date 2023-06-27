import "./Login.css";

import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import Google from "../../assets/img/google.svg";
import Card from "../../components/Card";

const Login = () => {
  return (
    <div className="login">
      <Card>
        <img
          src={Logo}
          alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
          className="login__logo"
        />
        <form className="login__form">
          <div>
            <label htmlFor="register-email">Email</label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              id="register-email"
              required
            />
          </div>
          <div>
            <label htmlFor="register-password">Senha</label>
            <input
              type="password"
              placeholder="**************"
              id="register-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>

          <div className="login__form__line">
            <span>ou</span>
          </div>

          <button type="submit" className="btn btn-secondary">
            <img src={Google} alt="Logo do Google" />
            Entre com o Google
          </button>

          <p className="login__form__text">
            Náo possui conta? Registre-se <Link to="/login">aqui</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
