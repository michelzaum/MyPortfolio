import React from 'react';
import './About.css';
import Navbar from '../../Components/NavBar/NavBar';


class About extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <div className="aboutMe-container">
                        <div className="title-container">
                            <h1 className="title">Sobre mim...</h1>
                        </div>
                        <div className="text-container">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, in vero quasi aliquid quibusdam ullam dignissimos eveniet ratione laboriosam, repudiandae architecto maiores recusandae, quam quidem consectetur veniam officiis dolor?<br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore veniam debitis at autem ea, eveniet facere enim velit dolor? Facilis incidunt rerum ducimus suscipit omnis quas quia ullam nostrum.
                            </p>
                        </div>
                        <div className="navigation-container">
                            <button id="btn-me" className="btn-me" />
                            <label>Me!</label>

                            <button id="btn-skills" className="btn-skills" />
                            <label>Skills</label>
                        </div>
                    </div>
                </div>
                <Navbar />
            </>
        )
    }
}

export default About;