import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../toolkitRedux/todoSlice";

const Form = ({ setStatus, setInputText, inputText }) => {
  const dispatch = useDispatch();

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Math.random() * 1000,
        text: inputText,
        completed: false,
      })
    );
    
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        placeholder="write here"
        type="text"
        className="todo-input"
      />
      <button
        onClick={submitTodoHandler}
        disabled={!inputText}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square" />
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
