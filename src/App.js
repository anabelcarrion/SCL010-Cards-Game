import React, { Component } from 'react';
import Header from './component/Header';
import Board from './component/Board';
import Footer from './component/Footer';
import './App.css';
import buildDeck from './tools/buildDeck';

//Obetniendo estado Inicial
const getInitialStatus = () => {
  const deckOfCards = buildDeck();
  return {
    deckOfCards,
    selectedCouple: [],
    comparing: false,
    numberOfAttempts: 0    
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialStatus();
  }

  render() {
    return (
      <div className="App">
        <Header 
          numberOfAttempts={this.state.numberOfAttempts}  
        />
        <Board 
          deckOfCards={this.state.deckOfCards}
          selectedCouple={this.state.selectedCouple}
          selectLetter={(card) => this.selectLetter(card)}
        />
        <Footer
        restartGame={() => this.restartGame()}
        />
      </div>

    );
  }

  selectLetter(card) {
    if (
      this.state.comparing ||
      this.state.selectedCouple.indexOf(card) > -1 ||
      card.found
    ) {
      return;
    }

    const selectedCouple = [...this.state.selectedCouple, card];
    this.setState({
      selectedCouple
    });

    if (selectedCouple.length === 2) {
      this.compareCouple(selectedCouple);
    }
  }
  
  compareCouple(selectedCouple) {
    this.setState({comparing: true});

    setTimeout(() => {
      const [firstLetter, secondLetter] = selectedCouple;
      let deckOfCards = this.state.deckOfCards;
      
      if (firstLetter.icon === secondLetter.icon) {
        deckOfCards = deckOfCards.map((card) => {
          if (card.icon !== firstLetter.icon) {
            return card;
          }

          return {...card, guessed: true};
        });
      }
      
      this.winner(deckOfCards);
      this.setState({
        selectedCouple: [],
        deckOfCards,
        comparing: false,
        numberOfAttempts: this.state.numberOfAttempts + 1
      })
    }, 1000)
  }

  winner(deckOfCards) {
    if (
      deckOfCards.filter((card) => !card.guessed).length === 0
    ) {
      alert(`Ganaste en ${this.state.numberOfAttempts} intentos!`);
    }
  }

  restartGame() {
    this.setState(
      getInitialStatus()
    );
  }
}

export default App;
