import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';

import './Contact.css';

//---ICONS---//
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/instagram.png';
import linkedin from '../../Images/linkedin.png';
import cat from '../../Images/cat.png';

function Contact() {
        return (
            <>
                <div className="container">
                    <div className="title">
                        <h1>Obrigado pela visita! Nos vemos por aí! <span>:D</span></h1>
                    </div>
                    <div className="contacts-container">
                        <a href="" target="_blank">
                            <img src={facebook} width={80} alt="facebook" />
                        </a>
                        <a href="" target="_blank">
                            <img src={instagram} width={80} alt="instagram" />
                        </a>
                        <a href="" target="_blank">
                            <img src={linkedin} width={80} alt="linkedin" />
                        </a>
                        <a href="" target="_blank">
                            <img src={cat} width={80} alt="github" />
                        </a>
                    </div>
                    <div className="identity">
                        <span>Michel de Oliveira Nascimento - Desenvolvedor Front End</span>
                    </div>
                </div>
                <NavBar />
            </>
        )
}

export default Contact;