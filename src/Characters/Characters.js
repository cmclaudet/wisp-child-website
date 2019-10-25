import React from 'react';
import './Style.css';
import '../Shared.css';
import { withRouter } from 'react-router-dom'
import mylo_profile from '../res/characters/mylo-neutral.png';
import ademia_profile from '../res/characters/ademia-neutral.png';
import nate_profile from '../res/characters/nate-neutral.png';
import arthur_profile from '../res/characters/arthur-neutral.png';

class CharacterProfile extends React.Component {
  render() {
    return (
      <div className="creator-profile">
        <h2>{this.props.name}</h2>
        <img className="character-profile__picture"
          src={this.props.source}
          alt={this.props.alt}
        />
        <p className="character-profile__description">{this.props.description}</p>
      </div>
    )
  }
}


class Characters extends React.Component {
  render() {
    return (
      <div className='characters main'>
        <h1 className="banner-title-text">Characters</h1>
        <div className="character-profiles">
          <CharacterProfile
            source={mylo_profile}
            alt="mylo"
            name="Mylo"
            description="Mylo is adorable. Just look at them. Everyone loves Mylo."
          />
          <CharacterProfile
            source={ademia_profile}
            alt="ademia"
            name="Ademia"
            description="Ademia is a beast. She is the coolest character. Ridiculously smart and gets obsessed. She loves Mylo more than life itself."
          />
          <CharacterProfile
            source={nate_profile}
            alt="nate"
            name="Nate"
            description="Nate likes the idea of running a business and making lots of money. He assumes Mylo will help him do it. He wants to make even more money than his Dad."
          />
          <CharacterProfile
            source={arthur_profile}
            alt="arthur"
            name="Arthur"
            description="Arthur is also a beast. Actually everyone in this game is a beast. Arthur likes money. He works with Ademia because she makes him money. Life is good."
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Characters)
