import React from "react";
import { Link } from 'react-router-dom';

import "./Home.css";
import Logo from "../../assets/images/logo.svg";
import UserIcon from "../../assets/images/user.png";
import LampIcon from "../../assets/images/icons/lamp.svg";
import ChatIcon from "../../assets/images/icons/chat.svg";
import StoreIcon from "../../assets/images/icons/store.svg";
import ShieldIcon from "../../assets/images/icons/shield.svg";
import StudentCapIcon from "../../assets/images/icons/cap.svg";
import ArrowDownIcon from "../../assets/images/icons/arrow-down.svg";

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <img
            src={Logo}
            alt="Logo escrito GreenQuest em preto ao lado de um ramo com duas folhas verdes"
          />
        </div>
        <div className="header__menu">
          <img src={UserIcon} alt="Foto do perfil" />
          <img src={ArrowDownIcon} alt="Seta preta para baixo" />
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <h1 className="hero__text">Be the change</h1>
        </section>

        <section className="menu">
          <button type="button" className="menu__button">
            <div className="menu__button__icon">
              <img src={ShieldIcon} alt="Ícone escudo branco" />
            </div>
            <div className="menu__button__label">
              <span>Ligas</span>
              <span>Crie times</span>
            </div>
          </button>
          <button type="button" className="menu__button">
            <div className="menu__button__icon">
              <img src={LampIcon} alt="Ícone lâmpada branca" />
            </div>
            <div className="menu__button__label">
              <Link className="link" to={"/game"}> <span>Praticar</span>  </Link>
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
              <img
                src={ChatIcon}
                alt="Ícone dois balões de diálogo brancos"
              />
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
              <Link className="link" to={"/loja"}> <span>Loja</span> </Link>
              <span>Troque seus pontos</span>
            </div>
          </button>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
