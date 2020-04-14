import React from 'react';
import './Footer.css';

//---ICONS---//
import github from '../../Images/cat.png';
import facebook from '../../Images/facebook.png';
import linkedin from '../../Images/linkedin.png';
import instagram from '../../Images/instagram.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-item">
                        <a href="https://github.com/MichelNascimento" target="_blank">
                            <img className="footer-icon" src={github} alt="GitHub" width="25px" />
                        </a>
                    </div>
                    <div className="footer-item">
                        <a href="https://www.linkedin.com/in/michel-de-oliveira-nascimento-09257216b/" target="_blank">
                            <img className="footer-icon" src={linkedin} alt="linkedin" width="25px" />
                        </a>
                    </div>
                    <div className="footer-item">
                        <a href="https://www.facebook.com/michel.deoliveiranascimento" target="_blank">
                            <img className="footer-icon" src={facebook} alt="Facebook" width="25px" />
                        </a>
                    </div>
                    <div className="footer-item">
                        <a href="https://www.instagram.com/menino_michel/" target="_blank">
                            <img className="footer-icon" src={instagram} alt="Instagram" width="25px" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;