import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList/TodoList"
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import AddItem from "./components/AddItem/AddItem";
import './index.css'

const App = () => {

  const items =
  [
    {text: "Learn JS", important: true, id: 1},
    {text: "Drink Coffee", important: false, id: 2},
    {text: "Learn React", important: true, id: 3},
    {text: "Learn TypeScript", important: false, id: 4},
    {text: "Learn Node.js", important: true, id: 5},
  ]

  return (
    <div className="app">
      <Header />
      <Search />
      <TodoList items={items}/>
      <AddItem />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const x = React.createElement('h1' , null, 'Hello world')  // root.render(x)
root.render(<App />);


