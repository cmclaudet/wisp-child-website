import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './Shared.css';
import App from './App/App';
import { SubPageEnum } from './SubPageEnum';
import Home from './Home/Home';
import Characters from './Characters/Characters';
import ConceptArt from './ConceptArt/ConceptArt.js';
import * as serviceWorker from './serviceWorker';

const router = (
    <Router>
        <App>
            <Switch>
                <Route exact path={SubPageEnum.HOME.path} component={Home} />
                <Route path={SubPageEnum.CHARACTERS.path} component={Characters} />
                <Route path={SubPageEnum.CONCEPT_ART.path} component={ConceptArt} />
            </Switch>
        </App>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
