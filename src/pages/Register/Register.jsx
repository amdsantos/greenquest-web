import "./Register.css";

import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import Google from "../../assets/img/google.svg";
import Card from "../../components/Card";

const Register = () => {
  return (
    <div className="register">
      <Card>
        <img
          src={Logo}
          alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
          className="register__logo"
        />

        <button type="submit" className="btn btn-secondary">
          <img src={Google} alt="Logo do Google" />
          Entre com o Google
        </button>

        <form className="register__form">
          <div className="register__form__line">
            <span>ou</span>
          </div>
          <div>
            <label htmlFor="register-name">Nome</label>
            <input
              type="text"
              placeholder="Nome completo"
              id="register-name"
              required
            />
          </div>
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
          <div>
            <label htmlFor="register-password-confirm">Confirme a senha</label>
            <input
              type="password"
              placeholder="**************"
              id="register-password-confirm"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>

          <p className="register__form__text">
            Já possui conta? Entre <Link to="/login">aqui</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Register;
