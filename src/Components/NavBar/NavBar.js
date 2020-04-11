import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class Header extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <Link to="/" className="item-container">
                        <div>
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link to="/About" className="item-container">
                        <div>
                            <span>About</span>
                        </div>
                    </Link>
                    <Link to="/Works" className="item-container">
                        <div>
                            <span>Works</span>
                        </div>
                    </Link>
                    <Link to="/Contact" className="item-container">
                        <div>
                            <span>Contact</span>
                        </div>
                    </Link>
                </nav>
            </>
        )
    }
}

export default Header;