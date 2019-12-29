import React, { Component } from 'react';
import Card from './Card'
import './Board.css'

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        {
          this.props.deckOfCards
            .map((card, index) => {
              const estaSiendoComparada = this.props.selectedCouple.indexOf(card) > -1;
              return <Card
                key={index} 
                icon={card.icon}
                estaSiendoComparada={estaSiendoComparada}
                selectLetter={() => this.props.selectLetter(card)}
                guessed={card.guessed}
              />;
            })
        }
      </div>
    ); 
  }
};

