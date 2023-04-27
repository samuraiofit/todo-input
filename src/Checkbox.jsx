
function Checkbox(props) {
  return(
    <div>
     <input type='checkbox' checked={props.check} onChange={props.handlerChanges} className="checkbox"/>
    </div>
  )  
}


export default Checkbox;

