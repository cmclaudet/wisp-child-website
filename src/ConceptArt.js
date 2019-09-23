import React from 'react';
import './index.css';
import { withRouter } from 'react-router-dom'
import main_characters from './res/concept-art/main-characters.png';
import { CornerButton } from './App';

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
            <img className="concept-art-piece" src={main_characters} alt="main characters" onClick={() => this.onOpenPreviewWindow(main_characters)}/>
            {this.state.previewImage &&
                <div className="preview-window">
                    <img src={this.state.previewImage} alt="preview image"/>
                    <CornerButton showCloseIcon={true} onClick={() => this.onClosePreviewWindow()}/>
                </div>
            }
        </div>
      )
    }
  }
//   style={{'maxWidth': '100vw, overflowX: hidden'}}

  export default withRouter(ConceptArt);