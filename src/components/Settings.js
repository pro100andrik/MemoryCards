const Settings = props => {
  return (
    <div className='settings'>
      <div>Settings</div>
      <div> Mode: {props.modes.map((element, index) => {
        return <Button key={index} mode={element} prevMode={props.mode} changeMode={props.changeMode}/>
      })}</div>
      <div>Hardcore mode:
        <button onClick={props.toggleHardcore}
                className={props.hardcore ? 'hardcore-button-on' : 'hardcore-button-off'}>{props.hardcore ? 'On' : 'Off'}</button></div>
    </div>
  )
}

const Button = props => {
  return (
    <button className='mode-button chosen'
      disabled={props.prevMode === props.mode}
      onClick={() => props.changeMode(props.mode)}>{props.mode}</button>
  )
}

export default Settings
