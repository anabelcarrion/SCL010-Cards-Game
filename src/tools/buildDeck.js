//importando librerias
import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

//cantidad de cartas en la mesa
const NUMBER_CARDS = 16;

//construyendo la cartas
export default () =>  {
  const fontAwesomeClasses = FontAwesomeClasses();
  let cards = [];

  while (cards.length < NUMBER_CARDS) {
    const index = Math.floor(Math.random() * fontAwesomeClasses.length);
    const card = {
      icon: fontAwesomeClasses.splice(index, 1)[0],
      guessed: false
    };

    cards.push(card);
    cards.push({...card});
  }

  return shuffle(cards);
};
