import React, { useState, useEffect } from 'react';
import './Works.css';
import NavBar from '../../Components/NavBar/NavBar';
import Work from '../../Components/Work/Work';

function Works() {
    let [work, setWork] = useState([]);

    let data = [
        { title: "StreamIt", description: "A mais nova rede social para programadores!", techs: "ReactJS, React Native, NodeJS, MongoDB" },
        { title: "My Portfólio", description: "Um site para que você possa conhecer um pouco mais sobre mim", techs: "ReactJS, CSS" },
        { title: "iFigaro", description: "Deixe a tecnologia te ajudar na hora de dar aquele toque no visual ;)", techs: "React Native, NodeJS, CSS" }
    ];

    useEffect(() => {
        setWork(data)
    }, []);

    return (
        <>
            <div className="title-works-container">
                <h1>Meus trabalhos</h1>
            </div>
            <div className="works-container">
                {work.map(item => (
                    <Work
                        title={item.title}
                        description={item.description}
                        techs={item.techs}
                    />
                ))}
            </div>
            <NavBar />
        </>
    )
}

export default Works;