import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = () =>
{

  const items =
  [
    {text: "Learn JS", important: true, id: 1},
    {text: "Drink Coffee", important: false, id: 2},
    {text: "Learn React", important: true, id: 3},
    {text: "Learn TypeScript", important: false, id: 4},
    {text: "Learn Node.js", important: true, id: 5},
  ]


  const data = items.map(({text, important, id}) => 
  {
    return <TodoListItem text={text} important={important} key={id} />;
  })
  return (
    <ul>
      {data}
    </ul>
  )
}

export default TodoList;