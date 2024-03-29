import React from 'react';
import './Style.css';
import '../Shared.css';
import { withRouter } from 'react-router-dom'
import main_characters from '../res/concept-art/main-characters.png';
import ademia_and_mylo from '../res/concept-art/ademia-and-mylo.png';
import ademia_dialogue from '../res/concept-art/ademia-dialogue.png';
import mylo_tree from '../res/concept-art/mylo-tree.png';
import mylo_and_building from '../res/concept-art/mylo-and-building.png';
import buildings from '../res/concept-art/buildings.png';
import { CornerButton } from '../CornerButton';

class ConceptArt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          previewImage: null
        };
    }

    onClosePreviewWindow() {
        this.setState({
            previewImage: null
        })
    }

    onOpenPreviewWindow(previewImageSource) {
        this.setState({
            previewImage: previewImageSource
        })
    }

    render() {
      return (
        <div className="concept-art main">
            <h1 className="banner-title-text">Concept Art</h1>
            <div className="concept-art-pieces">
                <img className="concept-art-piece" src={main_characters} alt="main characters" onClick={() => this.onOpenPreviewWindow(main_characters)}/>
                <img className="concept-art-piece" src={ademia_and_mylo} alt="ademia and mylo" onClick={() => this.onOpenPreviewWindow(ademia_and_mylo)}/>
                <img className="concept-art-piece" src={ademia_dialogue} alt="ademia and mylo" onClick={() => this.onOpenPreviewWindow(ademia_dialogue)}/>
                <img className="concept-art-piece" src={mylo_tree} alt="ademia and mylo" onClick={() => this.onOpenPreviewWindow(mylo_tree)}/>
                <img className="concept-art-piece" src={mylo_and_building} alt="ademia and mylo" onClick={() => this.onOpenPreviewWindow(mylo_and_building)}/>
                <img className="concept-art-piece" src={buildings} alt="ademia and mylo" onClick={() => this.onOpenPreviewWindow(buildings)}/>
            </div>
            {this.state.previewImage &&
                <div className="preview-window">
                    <div className="preview-window__background" onClick={() => this.onClosePreviewWindow()}></div>
                    <img src={this.state.previewImage} alt={this.state.previewImage} onClick={() => {}}/>
                    <CornerButton showCloseIcon={true} onClick={() => this.onClosePreviewWindow()}/>
                </div>
            }
        </div>
      )
    }
  }

  export default withRouter(ConceptArt);
