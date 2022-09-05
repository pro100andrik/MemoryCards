
const InfoControls = (props) => {
  return(
    <div className="info-controls-box">
      <div>Time: {props.time} </div>
      <div>Moves: {props.moves} </div>
      <div><button className='button' onClick={props.restartGame}>Restart</button></div>
      <div><button className='button' onClick={props.showSettings}>Settings</button></div>
    </div>
  )
}

export default InfoControls;
