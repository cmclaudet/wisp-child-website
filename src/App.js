import React from 'react';
import './index.css';
import Home from './Home';
import Characters from './Characters';
import { Link } from 'react-router-dom'

var SubPageEnum = {
  HOME: "Home",
  CHARACTERS: "Characters",
  CONCEPT_ART: "Concept Art",
  COMICS: "Comics"
};

class HamburgerMenu extends React.Component {
  render() {
    return (
      <button className="icon-border" onClick={() => this.props.onClick()}>
        <div className="icon-border__line"></div>
        <div className="icon-border__line"></div>
        <div className="icon-border__line"></div>
      </button>
    )
  }
}

class CloseMenuButton extends React.Component {
  render() {
    return (
      <button className="icon-border" onClick={() => this.props.onClick()}>
        <div className="icon-border__close">X</div>
      </button>
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
            isSelectedSubPage={true}
            title={SubPageEnum.HOME}
            onClickProp={() => this.props.onClickSubpageButton(SubPageButton.HOME)}
          />
          <SubPageButton
            isSelectedSubPage={false}
            title={SubPageEnum.CHARACTERS}
            onClickProp={() => this.props.onClickSubpageButton(SubPageButton.CHARACTERS)}
          />
          <SubPageButton
            isSelectedSubPage={false}
            title={SubPageEnum.CONCEPT_ART}
            onClickProp={() => this.props.onClickSubpageButton(SubPageButton.CONCEPT_ART)}
          />
          <SubPageButton
            isSelectedSubPage={false}
            title={SubPageEnum.COMICS}
            onClickProp={() => this.props.onClickSubpageButton(SubPageButton.COMICS)}
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
      selectedSubPage: SubPageEnum.HOME
    };
  }

  showMenu() {
    this.setState({
      isMenuOpen: true
    })
  }

  hideMenu() {
    this.setState({
      isMenuOpen: false
    })
  }

  onSubPageButtonClick(subpage) {
    this.setState({
      isMenuOpen: false,
      selectedSubPage: subpage
    })
    this.props.history.replace('/mypage')
  }

  render () {
    return (
      <div>
        {this.state.selectedSubPage === SubPageEnum.HOME && <Home/>}
        {this.state.selectedSubPage === SubPageEnum.CHARACTERS && <Characters/>}
        {this.state.isMenuOpen &&
          <Menu
            onClickOutside = {() => this.hideMenu()} 
            onClickSubpageButton = {page => this.onSubPageButtonClick(page)}
          />
        }
        {!this.state.isMenuOpen && <HamburgerMenu onClick = {() => this.showMenu()}/>}
        {this.state.isMenuOpen && <CloseMenuButton onClick = {() => this.hideMenu()}/>}
      </div>
    );
  }
}

export default App;
