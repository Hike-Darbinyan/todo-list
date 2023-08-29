import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./components/TodoList/TodoList"
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import AddItem from "./components/AddItem/AddItem";
import './index.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <TodoList />
      <AddItem />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const x = React.createElement('h1' , null, 'Hello world')  // root.render(x)
root.render(<App />);


