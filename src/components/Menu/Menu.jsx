import { Link } from "react-router-dom";

import "./Menu.css";

import ShieldIcon from "../../assets/img/icons/shield.svg";
import LampIcon from "../../assets/img/icons/lamp.svg";
import StudentCapIcon from "../../assets/img/icons/cap.svg";
import ChatIcon from "../../assets/img/icons/chat.svg";
import StoreIcon from "../../assets/img/icons/store.svg";

const Menu = ({ vertical }) => {
  return (
    <section className={vertical ? "menu menu--vertical" : "menu"}>
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
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={StudentCapIcon} alt="Ícone capelo branco" />
        </div>
        <div className="menu__button__label">
          <span>Aprender</span>
          <span>Saiba mais sobre ESG</span>
        </div>
      </button>
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
