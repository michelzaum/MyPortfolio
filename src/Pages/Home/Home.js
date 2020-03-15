import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Home.css';

function Home() {
  return (
    <>
      <div className="approach-container">
        <h1 className="approach">Olá! eu sou Michel de Oliveira.<br />
          Sou desenvolvedor Front end.
        </h1>
      </div>
      <div className="short-apresentation-container">
        <div className="short-apresentation">
          "Sou um jovem de 20 anos que atualmente trabalha como Desenvolvedor Júnior. <br />
          Com uma grande paixão por aprendizado, venho me aprofundando no universo Front End. <br />
          Acredito que o trabalho em equipe e o ato de ajudar o próximo nos faz caminhar juntos no melhor caminho."
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Home;
