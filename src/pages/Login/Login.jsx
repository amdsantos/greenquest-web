import "./Login.css";

import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import Google from "../../assets/img/google.svg";
import Card from "../../components/Card/Card";

const Login = () => {
  return (
    <div className="login">
      <Card>
        <img
          src={Logo}
          alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
          className="login__logo"
        />

        <button type="submit" className="btn btn-secondary">
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
