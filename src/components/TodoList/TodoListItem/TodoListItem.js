const TodoListItem = ({text, important}) =>
{

    const style = 
    {
        color: important ? "white" : "black"
    }
  return (
    <ul>
        <li style={style}>{text}</li>
    </ul>
  )
}

export default TodoListItem;