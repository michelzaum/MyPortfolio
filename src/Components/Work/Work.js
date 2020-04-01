import React from 'react';
import { Link } from 'react-router-dom';

import './Work.css'

class Work extends React.Component {
    render() {
        return (
            <>
                <Link to="" className="work-item">
                    <div className="work-title-container">
                        <h1 className="work-title">Titulo Work</h1>
                    </div>
                    <div className="work-description-container">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, iusto <br />
                        sint, eos animi quos neque accusantium ad alias labore dicta sed rem exercitationem<br />
                         quas? Et ipsam earum omnis dicta consequuntur?</p>
                    </div>
                    <div className="work-techs-container">
                        <span className="work-techs">ReactJS, React Native, NodeJS</span>
                    </div>
                </Link>
            </>
        )
    }
}

export default Work;