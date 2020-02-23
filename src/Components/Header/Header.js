import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Link to="/" className="item-container home">
                        <div className="header-item">
                            <span className="item-name">Home</span>
                        </div>
                    </Link>
                    <Link to="/Contact" className="item-container">
                        <div className="header-item">
                            <span className="item-name">Contato</span>
                        </div>
                    </Link>
                    <Link to="/Works" className="item-container">
                        <div className="header-item">
                            <span className="item-name">Works</span>
                        </div>
                    </Link>
                </header>
            </>
        )
    }
}

export default Header;