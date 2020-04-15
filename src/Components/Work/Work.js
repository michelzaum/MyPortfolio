import React from 'react';
import { Link } from 'react-router-dom';

import './Work.css'

class Work extends React.Component {
    render() {
        return (
            <>
                <Link to="" className="work-item">
                    <div className="work-title-container">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="work-description-container">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="work-techs-container">
                        <span>{this.props.techs}</span>
                    </div>
                </Link>
            </>
        )
    }

}

export default Work;
