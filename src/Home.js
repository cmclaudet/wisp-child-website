import React from 'react';
import './index.css';
import title from './res/title.png';
import nate_shout from './res/nate-shout.png';
import orchard from './res/orchard.png';
import village_girl from './res/village-girl.png';
import catherine_picture from './res/catherine-picture.jpg';
import email_logo from './res/email-logo.png';
import twitter_logo from './res/twitter-logo.png';

class GameSnippet extends React.Component {
  render() {
    return (
      <div className="game-snippet">
        <div className="game-snippet__text">
          <h2 className="game-snippet__text__header">{this.props.header}</h2>
          <p>{this.props.description}</p>
        </div>
        <img className="game-snippet__screenshot"
          src={this.props.source}
          alt={this.props.alt}
        />
      </div> 
    )
  }
}

class CreatorProfile extends React.Component {
  render() {
    return (
      <div className="creator-profile">
        <img className="creator-profile__picture"
          src={this.props.source}
          alt={this.props.alt}
        />
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

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

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <img className="background" src={title} alt="background"/>
        <h1 className="title-text">Wisp Child is amazing</h1>
        <GameSnippet
          header="Look at Nate" 
          description="Yes. He is obsessed with apples and cider. He wants to make lots of money. More money than his Dad." 
          source={nate_shout} 
          alt="nate shout"
        />
        <GameSnippet
          header="The orchard is beautiful"
          description="The whole game is the most beautiful thing you'll ever see. Just look at those apple trees. omg."
          source={orchard} 
          alt="orchard"
        />
        <GameSnippet
          header="There are NPCs"
          description="You can talk to lots of NPCs. The village is epic because of this. All villagers have something hilarious or interesting or cute to say."
          source={village_girl} 
          alt="village girl"
        />
        <a className="download-button" href='https://beastgamestudios.itch.io/wisp-child'>Download</a>
        <h1 className="title-text">Beast Game Studio</h1>
        <CreatorProfile
          source={catherine_picture}
          alt="catherine picture"
          name="Catherine Claudet"
          description="The programmer of Wisp Child. When working on it, she gets crazy obsessed and spends all her free time doing it. Loves Mylo more than most real people."
        />
        <CreatorProfile
          source={catherine_picture}
          alt="emily picture"
          name="Emily Claudet"
          description="She is obsessed. And very hungry. And wants to beast the world. Every day. All the time. Millions."
        />
        <CreatorProfile
          source={catherine_picture}
          alt="christopher picture"
          name="Christopher Claudet"
          description="He is also hungry. And he does beast. So much feasting though. He is the fattest in the family."
        />
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

export default Home
