import React, { useState } from 'react';
import logo from '../../../assets/img/logo.svg';
import user from '../../../assets/img/user.png';
import arrowDown from '../../../assets/img/icons/arrow-down.svg';
import './Card.css'
import { Question } from './data/dataquestions';
import { Link } from 'react-router-dom';
import planeth from './../../../assets/img/happy-planeta.webp'
import planets from './../../../assets/img/sad-planeta.webp'
import Footer from '../../Footer/Footer';


const Game = () => {
const ask = Question ?? []
const [perguntaAtual, setPerguntaAtual] = useState(0);
const [showPontuacao, setshowPontuacao] = useState(false);
const [pontos, setPontos] = useState(0);

function proximaPergunta(correta){
    const nextQuestion = perguntaAtual + 1;

    if(correta){
    setPontos(pontos + 1);

}

    if (nextQuestion < ask.length){
        setPerguntaAtual(nextQuestion);
    }
    else{
        setshowPontuacao(true);
    }
}

        return (     
        <div className='Container'> 
        <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                    <div className="header__menu">
                        <img src={user} alt="" />
                        <img src={arrowDown} alt="" />
                    </div>
                </header>
                <main className="card">
                    
                        <div className='quiz'> 
        {showPontuacao ? (<div className='pontuacao'> 
        <span className='ponts'>Sua pontuação é {pontos} de {ask.length}</span> 
        <Link to={"/"}> <button className='pontuacao-back'>Voltar</button> </Link>
        {pontos > 3 ? (
            <img className='planet' src={planeth} alt="planeta terra feliz" />
        ) : (
            <img className='planet' src={planets} alt="planeta terra triste" />
        )}
        </div> ) : (
    <> 
    <div className='title'>QUIZ ESG</div>

    <div className='questionsContainer'>
    <span className='box'>Pergunta {perguntaAtual + 1}/{ask.length}</span>
<div className='question_container'>{ask[perguntaAtual].pergunta}</div>
<div className='resposta'>
    {ask[perguntaAtual].opcoesResposta.map((opcoesResposta) =>

    <div className='group'> 
    <span className='options'>{opcoesResposta.alternativa}</span>
    <button className='buttonquiz' onClick={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
        </div>
        )}
        
        
            </div>

    </div>

    </>
    )}
        </div>
            </main>
            <Footer/>
            </div>
        )
        
    }

    export default Game;