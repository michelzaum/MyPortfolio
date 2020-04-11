import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Home.css';

function Home() {
  return (
    <>
      <div className="approach-container">
        <h1>Olá! eu sou <span>Michel de Oliveira</span>.<br />
          Sou desenvolvedor <span>Front end</span>.
        </h1>
        <div className="short-apresentation-container">
          <div>
            " - Acredito que o trabalho em equipe e o ato de ajudar o próximo nos faz trilhar juntos no melhor caminho."
        </div>
        </div>
        <div className="btn-more-container">
          <button>
            Mais sobre mim
          </button>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Home;
