import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// --- Pages --- //
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact="true" component={Home}/>
            <Route path="/About" component={About} />
            <Route path="/Works" component={Works} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
