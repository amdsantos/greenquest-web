import React from "react";
import "./Home.css";

import Logo from "../../assets/img/logo.svg";
import UserIcon from "../../assets/img/user.png";
import ArrowDownIcon from "../../assets/img/icons/arrow-down.svg";
import ShieldIcon from "../../assets/img/icons/shield.svg";
import LampIcon from "../../assets/img/icons/lamp.svg";
import StudentCapIcon from "../../assets/img/icons/cap.svg";
import ChatIcon from "../../assets/img/icons/chat.svg";
import StoreIcon from "../../assets/img/icons/store.svg";

const Home = () => {
  return (
    <html lang="pt_br">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>GreenQuest</title>
      </head>
      <body>
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
                <span>Loja</span>
                <span>Troque seus pontos</span>
              </div>
            </button>
          </section>
        </main>
        <footer className="footer"></footer>
      </body>
    </html>
  );
};

export default Home;
