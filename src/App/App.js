import React from 'react';
import './Style.css';
import '../Shared.css';
import { withRouter } from 'react-router-dom'
import email_logo from '../res/email-logo.png';
import twitter_logo from '../res/twitter-logo.png';
import { SubPageEnum } from '../SubPageEnum';
import { CornerButton } from '../CornerButton';


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

class Menu extends React.Component {
  render() {
      return (
          <div className="menu">
              <div className="menu__outside" onClick={this.props.onClickOutside}></div>
              <div className="menu__inside">
                  <SubPageButton
                      isSelectedSubPage={this.props.selectedSubPage === SubPageEnum.HOME.path}
                      title={SubPageEnum.HOME.title}
                      onClickProp={() => this.props.onClickSubpageButton(SubPageEnum.HOME.path)}
                  />
                  <SubPageButton
                      isSelectedSubPage={this.props.selectedSubPage === SubPageEnum.CHARACTERS.path}
                      title={SubPageEnum.CHARACTERS.title}
                      onClickProp={() => this.props.onClickSubpageButton(SubPageEnum.CHARACTERS.path)}
                  />
                  <SubPageButton
                      isSelectedSubPage={this.props.selectedSubPage === SubPageEnum.CONCEPT_ART.path}
                      title={SubPageEnum.CONCEPT_ART.title}
                      onClickProp={() => this.props.onClickSubpageButton(SubPageEnum.CONCEPT_ART.path)}
                  />
              </div>
          </div>
      )
  }
}

class SubPageButton extends React.Component {
  render() {
      return (
      <button
          className={`subpage-button ${this.props.isSelectedSubPage && "subpage-button--selected"}`}
          onClick={this.props.onClickProp}
      >
          {this.props.title}
      </button>
      )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      selectedSubPage: this.props.location.pathname
    };
  }

  toggleMenu() {
      this.setState({
          isMenuOpen: !this.state.isMenuOpen
      })
  }

  onSubPageButtonClick(subpage_path) {
      this.setState({
          isMenuOpen: false,
          selectedSubPage: subpage_path
      })
      this.props.history.push(subpage_path)
  }

  render() {
    return (
      <div class="app">
        {this.state.isMenuOpen &&
          <Menu
              selectedSubPage = {this.state.selectedSubPage}
              onClickOutside = {() => this.toggleMenu()} 
              onClickSubpageButton = {(page, path) => this.onSubPageButtonClick(page, path)}
          />
        }
        <CornerButton showCloseIcon={this.state.isMenuOpen} onClick = {() => this.toggleMenu()}/>
        {this.props.children}
        <ContactInfo
            widgets={
                [<ContactWidget key="email" link="mailto:cmclaudet@gmail.com?Subject=Hello" source={email_logo} alt="email logo"/>,
                <ContactWidget key="twitter" link="https://twitter.com/beastgamestudio" source={twitter_logo} alt="twitter logo"/>]
            }
        />
      </div>
    )
  }
}

export default withRouter(App);
