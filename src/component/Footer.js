import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer> 
        <div className="buttonContainer">
            <button className="button" onClick={this.props.restartGame}>
              Reiniciar
            </button>
        </div>
        <div className="subtitle">@anabelcarrion</div>

      </footer>
    );
  }
};
