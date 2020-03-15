import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    {/* <div className="Lights">
                        <img src={LightOn} alt="light" width="40px" />
                    </div> */}
                    <Link to="/" className="item-container home">
                        <div className="header-item">
                            <span className="item-name">Home</span>
                        </div>
                    </Link>
                    <Link to="/About" className="item-container">
                        <div className="header-item">
                            <span className="item-name">About</span>
                        </div>
                    </Link>
                    <Link to="/Works" className="item-container">
                        <div className="header-item">
                            <span className="item-name">Works</span>
                        </div>
                    </Link>
                    <Link to="/Contact" className="item-container">
                        <div className="header-item">
                            <span className="item-name">Contact</span>
                        </div>
                    </Link>
                </header>
            </>
        )
    }
}

export default Header;