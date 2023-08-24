import React from "react";
import ReactDOM  from "react-dom/client";
import TodoList from "./components/TodoList"
import Header from "./components/Header";
import Search from "./components/Search";

const App = () =>
{
  return (
  <div>
    <Header />
    <Search />
    <TodoList />
  </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const x = React.createElement('h1' , null, 'Hello world')  // root.render(x)
root.render(<App />);


