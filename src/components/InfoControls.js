
function formatTime(seconds) {
  return ('0'+parseInt(seconds / 60 % 60)).slice(-2) + ':' + ('0'+parseInt(seconds % 60)).slice(-2)
}

const InfoControls = (props) => {
  return(
    <div className="info-controls-box">
      <div>Time: {formatTime(props.time)} </div>
      <div>Moves: {props.moves} </div>
      <div><button className='button' onClick={props.restartGame}>Restart</button></div>
      <div><button className='button' onClick={props.showSettings}>Settings</button></div>
    </div>
  )
}

export default InfoControls;
