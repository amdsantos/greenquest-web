import React from 'react';
import shield from '../../assets/img/icons/shield.svg';
import lamp from '../../assets/img/icons/lamp.svg';
import cap from '../../assets/img/icons/cap.svg';
import chat from '../../assets/img/icons/chat.svg';
import store from '../../assets/img/icons/store.svg';
import "./style.css";
import { Link } from 'react-router-dom';
import { Header } from '../../shared/Header';

export function Home () {
  return (
    <>
  <Header/>
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
          <Link to={"/game"} className='link'><span className='link'>Praticar</span> </Link><span>Treine suas skills</span>
          </div>
        </button>
        <button type="button" className="menu__button">
          <div className="menu__button__icon">
            <img src={cap} alt="" />
          </div>
          <div className="menu__button__label">
            <span>Aprender</span><span>Saiba mais sobre ESG</span>
        </div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={chat} alt="" />
        </div>
        <div className="menu__button__label"><span>Fórum</span><span>Junta-se a comunidade</span></div>
      </button>
      <button type="button" className="menu__button">
        <div className="menu__button__icon">
          <img src={store} alt="" />
        </div>
        <div className="menu__button__label">
        <Link to={"/loja"} className='link'><span className='link'>Loja</span></Link> <span>Troque seus pontos</span>
        </div>
      </button>
    </section>

  </main>
  <footer className="footer"></footer>
  </>
  )}; 
