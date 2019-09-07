import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { SubPageEnum } from './App';
import Home from './Home';
import Characters from './Characters';
import ConceptArt from './ConceptArt';
import * as serviceWorker from './serviceWorker';
import email_logo from './res/email-logo.png';
import twitter_logo from './res/twitter-logo.png';


class ContactInfo extends React.Component {
    render() {
      return (
        <div className="contact-info">
          {this.props.widgets}
        </div>
      )
    }
}
  
class ContactWidget extends React.Component {
    render() {
        return (
        <a href={this.props.link}>
            <img src={this.props.source} alt={this.props.alt} className="contact-widget"/>
        </a>
        )
    }
}

const router = (
    <Router>
        <div>
            <App/>
            <Switch>
                <Route exact path={SubPageEnum.HOME.path} component={Home} />
                <Route path={SubPageEnum.CHARACTERS.path} component={Characters} />
                <Route path={SubPageEnum.CONCEPT_ART.path} component={ConceptArt} />
            </Switch>
            <ContactInfo
                widgets={
                    [<ContactWidget key="email" link="mailto:cmclaudet@gmail.com?Subject=Hello" source={email_logo} alt="email logo"/>,
                    <ContactWidget key="twitter" link="https://twitter.com/beastgamestudio" source={twitter_logo} alt="twitter logo"/>]
                }
            />
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
