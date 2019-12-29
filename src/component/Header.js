import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header> 
        <div className="title">Juego de Memoria</div>
         
        <div className="title">
          Intentos: {this.props.numberOfAttempts}
        </div>        
      </header>
    );
  }
};
