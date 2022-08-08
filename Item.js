const Item = (props) => (
  <li 
    className = {props.active ? "enable" : "disabled"}
  onClick = {() => props.changeStatus(props.id)}
  
  >{props.name}</li>
)

 // style = {props.active ? {fontWeight: 'bold'} :{color: 'gray'}}