import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "./toolkitRedux/todoSlice";

import "./App.css";
import Count from "./components/Count";

function App() {
  const todos = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCount] = useState(todos.length);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
      // setCount(0)
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      dispatch(setTodos(todoLocal))
      setCount(todos.length)
    }
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>UTM ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
      <Count />
    </div>
  );
}

export default App;
