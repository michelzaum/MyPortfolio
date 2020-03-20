import React from 'react';
import './Works.css';
import NavBar from '../../Components/NavBar/NavBar';

class Works extends React.Component {
    render() {
        return (
            <>
                <div className="title-works-container">
                    <h1 className="title-works">Meus trabalhos</h1>
                </div>
                <div className="works-container">

                </div>
                <NavBar />
            </>
        )
    }
}

export default Works;