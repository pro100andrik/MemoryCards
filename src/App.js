import React from 'react';
import InfoControls from './components/InfoControls';
import { DEFAULTCARDS } from './components/DEFAULTCARDS';
import GameBoard from './components/GameBoard';

import './App.css';

const defaultCards = DEFAULTCARDS.map((element, index) => {
  const card = {};
  card.img = element;
  card.id = index;
  card.opened = false;
  return card;
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      moves: 0,
      time: 0,
      cards: this.shufleCards([...structuredClone(defaultCards).slice(0, 8), ...structuredClone(defaultCards).slice(0, 8)]),
      mode: "4x4",
      currentMove: 'first',
    })
  }

  shufleCards(array){
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
  return array;
  }

  showSettings = () => {
    console.log('showSettings')
  }

  closeAllCards = () => {
    this.setState ({
      cards: this.state.cards.map(card => {
        card.opened = false;
        return card;
      }),
      clickCooldown: true,
    })
  }

  restatrGame = () => {
    this.closeAllCards();
    setTimeout(() => {
      this.setState ({
        cards: this.shufleCards(this.state.cards),
        clickCooldown: false,
        currentMove: 'first',
      })
    }, 500);
    console.log('restartGame')
  }

  handleCardClick = (cardIndex) => {
    if(this.state.cards[cardIndex].opened){
      return
    }
    if (this.state.currentMove === 'first'){
      if (this.state.clickCooldown === true){
        return
      }
      this.setState({
        currentMove: 'second',
        firstOpenedCardId: this.state.cards[cardIndex].id,
        firstOpenedCardIndex: cardIndex,
      },this.openCardByIndex(cardIndex))
    }else if(this.state.currentMove === 'second'){
      this.setState({
        currentMove: 'first',
        secondOpenedCardId: this.state.cards[cardIndex].id,
        secondOpenedCardIndex: cardIndex,
        clickCooldown: true,
      },this.openCardByIndex(cardIndex))
      setTimeout(() => {
        if (this.state.firstOpenedCardId !== this.state.secondOpenedCardId){
          this.closeCardsByIndex(this.state.firstOpenedCardIndex, this.state.secondOpenedCardIndex);
        }else{
          this.resetCooldown()
        }
        // console.log(this.state.firstOpenedCardId,this.state.secondOpenedCardId)
      }, 1);
    }

  }

  resetCooldown = () => {
    this.setState({
      clickCooldown: false,
    })
  }

  openCardByIndex = (cardIndex) => {
    this.setState({
      cards: this.state.cards.map((card, index) => {
        if (cardIndex === index){
          // console.log(cardIndex , index)
          card.opened = !card.opened
        };
        return card;
      })
    })
  }

  closeCardsByIndex = (firstOpenedCardIndex, secondOpenedCardIndex) => {
    setTimeout(() => {
      this.setState({
        cards: this.state.cards.map((card, index) => {
          if (firstOpenedCardIndex === index || secondOpenedCardIndex === index){
            // console.log(cardIndex , index)
            card.opened = !card.opened
          };
          return card;
        })
      }, this.resetCooldown)
    }, 1000);
  }

  render(){
    // console.log(this.state.cards)
    return(
      <div className="wrapper">
        <div className="title-box">Memory Cards Game</div>
        <InfoControls  time={this.state.time}
          moves={this.state.moves}
          restartGame={this.restatrGame}
          showSettings={this.showSettings}/>
        <GameBoard cards={this.state.cards}
          mode={this.state.mode}
          handleCardClick={this.handleCardClick}/>
      </div>
    )
  }
}

// 4x3=12 4x4=16 6x3=18 4x5=20 6x4=24 6x5=30 6x6=36

export default App;
