import { Link, useLocation } from "react-router-dom";

import "./Menu.css";

import LampIcon from "../../assets/images/icons/lamp.svg";
import ChatIcon from "../../assets/images/icons/chat.svg";
import StoreIcon from "../../assets/images/icons/store.svg";
import ShieldIcon from "../../assets/images/icons/shield.svg";
import StudentCapIcon from "../../assets/images/icons/cap.svg";

const Menu = ({ vertical }) => {
  const location = useLocation();

  const verifyLocationInHome = () => {
    let path = location.pathname;
    return path !== "/";
  };

  return (
    <section className={vertical ? "menu menu--vertical" : "menu"}>
      {verifyLocationInHome() && (
        <Link to="/">
          <button type="button" className="menu__button">
            HOME
          </button>
        </Link>
      )}
      <Link to="/ligas">
        <button type="button" className="menu__button">
          <div className="menu__button__icon">
            <img src={ShieldIcon} alt="Ícone escudo branco" />
          </div>
          <div className="menu__button__label">
            <span>Ligas</span>
            <span>Crie times</span>
          </div>
        </button>
      </Link>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={LampIcon} alt="Ícone lâmpada branca" />
        </div>
        <div className="menu__button__label">
          <span>Praticar</span>
          <span>Treine suas skills</span>
        </div>
      </button>
      <Link to="/aprender">
        <button type="button" className="menu__button">
          <div className="menu__button__icon">
            <img src={StudentCapIcon} alt="Ícone capelo branco" />
          </div>
          <div className="menu__button__label">
            <span>Aprender</span>
            <span>Saiba mais sobre ESG</span>
          </div>
        </button>
      </Link>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={ChatIcon} alt="Ícone dois balões de diálogo brancos" />
        </div>
        <div className="menu__button__label">
          <span>Fórum</span>
          <span>Junte-se a comunidade</span>
        </div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={StoreIcon} alt="Ícone de loja branco" />
        </div>
        <div className="menu__button__label">
          <span>Loja</span>
          <span>Troque seus pontos</span>
        </div>
      </button>
    </section>
  );
};

export default Menu;
