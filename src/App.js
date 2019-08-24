import React from 'react';
import './index.css';
import { withRouter } from 'react-router-dom'

export const SubPageEnum = {
  HOME: {title: "Home", path: "/"},
  CHARACTERS: {title: "Characters", path: "/characters"},
  CONCEPT_ART: {title: "Concept Art", path: "/concept_art"},
  COMICS: {title: "Comics", path: "/comics"}
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
                  <SubPageButton
                      isSelectedSubPage={this.props.selectedSubPage === SubPageEnum.COMICS.path}
                      title={SubPageEnum.COMICS.title}
                      onClickProp={() => this.props.onClickSubpageButton(SubPageEnum.COMICS.path)}
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

  onSubPageButtonClick(subpage_path) {
      this.setState({
          isMenuOpen: false,
          selectedSubPage: subpage_path
      })
      this.props.history.push(subpage_path)
  }

  render() {
    return (
      <div>
        {this.state.isMenuOpen &&
          <Menu
              selectedSubPage = {this.state.selectedSubPage}
              onClickOutside = {() => this.hideMenu()} 
              onClickSubpageButton = {(page, path) => this.onSubPageButtonClick(page, path)}
          />
          }
          {!this.state.isMenuOpen && <HamburgerMenu onClick = {() => this.showMenu()}/>}
          {this.state.isMenuOpen && <CloseMenuButton onClick = {() => this.hideMenu()}/>}
        </div>
    )
  }
}

export default withRouter(App);
