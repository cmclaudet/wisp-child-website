import React from 'react';

export class CornerButton extends React.Component {
    render() {
        return (
            <button className={`corner-button ${this.props.isMainMenu && 'corner-button--is-main-menu'}`}
                    onClick={() => this.props.onClick()}>
                {this.props.showCloseIcon ?
                <div className="corner-button__close">X</div> :
                <div>
                    <div className="corner-button__line"></div>
                    <div className="corner-button__line"></div>
                    <div className="corner-button__line"></div>
                </div>
                }
            </button>
        )
    }
}