import React, {Component} from 'react';
import './Card.css';
import FlipCard from 'react-flipcard';

export default class Card extends Component {
  render() {
    if(this.props.guessed){
      return <div className="card"></div>
    }
    return (
      <div className="card" onClick={this.props.selectLetter}>
        <FlipCard
          flipped={this.props.estaSiendoComparada || this.props.guessed}
          disabled={true}
        >
          <div className="coverPage">?</div>
          <div className="content">
            <i className={`fa ${this.props.icon} fa-5x`}></i>
          </div>
        </FlipCard>
      </div>
    )
  }  
};
