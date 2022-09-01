import React from 'react';

class GameBoard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    // console.log(this.props.cards)
    return(
      <div className="game-box">

        {this.props.cards.map((card, index) => {
          return (<Card index={index}
                    img={card.img}
                    opened={card.opened}
                    width={+this.props.mode[0] === 4 ? "24.2%" : "15.866%"}
                    handleCardClick={this.props.handleCardClick}/>)
        })}

      </div>
    )
  }
}


const Card = props => {
  return (
    <div className="card" style={{width: props.width}} onClick={() => props.handleCardClick(props.index)}>
      <img alt="pic" src={props.img} className={props.opened ? "opened-picture" : "closed-picture"}></img>
    </div>
  )
}

export default GameBoard;
