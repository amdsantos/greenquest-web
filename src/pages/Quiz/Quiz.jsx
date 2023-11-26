import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Quiz/Quiz.css';

import { Question } from './data/dataquestions';

import logo from '../../assets/images/logo.svg';
import UserIcon from '../../assets/images/user.png';
import planets from '../../assets/images/sad-planeta.webp';
import planeth from '../../assets/images/happy-planeta.webp';
import arrowDown from '../../assets/images/icons/arrow-down.svg';

const Game = () => {
  const questions = Question ?? [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;

    if (isCorrect) {
      setScore(score + 1);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='Container'>
      <header className="header">
        <Link to={"/"}>
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="header__menu">
          <img src={UserIcon} alt="Foto de Perfil" />
          <img src={arrowDown} alt="Seta" />
        </div>
      </header>
      <main className="card">
        <div className='quiz'>
          {showScore ? (
            <div className='pontuacao'>
              <span className='ponts'>Sua pontuação é {score} de {questions.length}</span>
              <Link to={"/"}>
                <button className='pontuacao-back'>Voltar</button>
              </Link>
              {score > 3 ? (
                <img className='planet' src={planeth} alt="planeta terra feliz" />
              ) : (
                <img className='planet' src={planets} alt="planeta terra triste" />
              )}
            </div>
          ) : (
            <>
              <div className='title'>QUIZ ESG</div>
              <div className='questionsContainer'>
                <span className='box'>Pergunta {currentQuestion + 1}/{questions.length}</span>
                <div className='question_container'>{questions[currentQuestion].pergunta}</div>
                <div className='resposta'>
                  {questions[currentQuestion].opcoesResposta.map((opcaoResposta) => (
                    <div key={opcaoResposta.alternativa} className='group'>
                      <span className='options'>{opcaoResposta.alternativa}</span>
                      <button
                        className='buttonquiz'
                        onClick={() => handleNextQuestion(opcaoResposta.correta)}
                      >
                        {opcaoResposta.resposta}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <div className="footer"></div>
    </div>
  );
};

export default Game;
