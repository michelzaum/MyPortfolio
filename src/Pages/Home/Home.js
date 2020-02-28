import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="approach-container">
        <h1 className="approach">Hi! I'm Michel de Oliveira.<br />
          I'm Front end Developer.
        </h1>
      </div>
      <div className="short-apresentation-container">
        <div className="short-apresentation">
          "Sou um jovem de 20 anos que atualmente trabalha como Desenvolvedor Júnior. <br />
          Com uma grande paixão por aprendizado, venho me aprofundando no universo Front End. <br />
          Acredito que o trabalho em equipe e o ato de ajudar o próximo nos faz caminhar juntos no melhor caminho."
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
