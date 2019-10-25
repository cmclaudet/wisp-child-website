import React from 'react';
import './Style.css';
import '../Shared.css';
import title from '../res/title.png';
import nate_shout from '../res/nate-shout.png';
import orchard from '../res/orchard.png';
import village_girl from '../res/village-girl.png';
import catherine_picture from '../res/catherine-picture.jpg';

class GameSnippet extends React.Component {
  render() {
    return (
      <div className={`game-snippet ${this.props.flipped && 'game-snippet--flipped'}`}>
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
        <p className="creator-profile__description">{this.props.description}</p>
      </div>
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
          flipped
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
          flipped
          header="There are NPCs"
          description="You can talk to lots of NPCs. The village is epic because of this. All villagers have something hilarious or interesting or cute to say."
          source={village_girl} 
          alt="village girl"
        />
        <a className="download-button" href='https://beastgamestudios.itch.io/wisp-child'>Download</a>
        <h1 className="title-text">Beast Game Studio</h1>
        <div className="creator-profiles">
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
        </div>
      </div>
    )
  }
}

export default Home
