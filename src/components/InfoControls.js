
const InfoControls = (props) => {
  return(
    <div className="info-controls-box">
      <div>Time: {props.time} </div>
      <div>Moves: {props.moves} </div>
      <div onClick={props.restartGame}> restart </div>
      <div onClick={props.showSettings}> settings </div>
    </div>
  )
}

export default InfoControls;
