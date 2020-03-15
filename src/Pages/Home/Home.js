import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Home.css';

function Home() {
  return (
    <>
      <div className="approach-container">
        <h1 className="approach">Olá! eu sou <span className="effect-text">Michel de Oliveira</span>.<br />
          Sou desenvolvedor <span className="effect-text">Front end</span>.
        </h1>
        <div className="short-apresentation-container">
          <div className="short-apresentation">
            " - Acredito que o trabalho em equipe e o ato de ajudar o próximo nos faz caminhar juntos no melhor caminho."
        </div>
        </div>
        <div className="btn-moreAboutMe-container">
          <button className="btn-moreAboutMe">
            Mais sobre mim
          </button>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Home;
