import React from 'react';

import './Contact.css';

import NavBar from '../../Components/NavBar/NavBar';

class Contact extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div>
                        <h1>Obrigado pela visita! Nos vemos por aí! :D</h1>
                    </div>
                </div>
                <NavBar />
            </>
        )
    }
}

export default Contact;