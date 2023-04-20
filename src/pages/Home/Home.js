import React from 'react';
import logo from '../../assets/img/logo.svg';
import user from '../../assets/img/user.png';
import arrowDown from '../../assets/img/icons/arrow-down.svg';
import shield from '../../assets/img/icons/shield.svg';
import lamp from '../../assets/img/icons/lamp.svg';
import cap from '../../assets/img/icons/cap.svg';
import chat from '../../assets/img/icons/chat.svg';
import store from '../../assets/img/icons/store.svg';
import "./style.css";

export function Home () {
  return (
    <>
    <header className="header">
    <div className="header__logo">
      <img src={logo} alt="" />
    </div>
    <div className="header__menu">
      <img src={user} alt="" />
      <img src={arrowDown} alt="" />
    </div>
  </header>
  <main className='main'>
    <section className="hero">
      <h1 className="hero__text">Be the change</h1>
    </section>

    <section className="menu">
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={shield} alt="" />
        </div>
        <div className="menu__button__label">
          <span>Ligas</span>
          <span>Crie times</span>
        </div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={lamp} alt="" />
        </div>
        <div className="menu__button__label">
          <span>Praticar</span><span></span>
        </div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={cap} alt="" />
        </div>
        <div className="menu__button__label">
          <span>Aprender</span><span></span>
        </div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={chat} alt="" />
        </div>
        <div className="menu__button__label"><span>Fórum</span><span></span></div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={store} alt="" />
        </div>
        <div className="menu__button__label">
          <span>Loja</span><span>Troque seus pontos</span>
        </div>
      </button>
    </section>
  </main>
  <footer className="footer"></footer>
  </>
  )}; 
