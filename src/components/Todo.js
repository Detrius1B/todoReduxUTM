import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompleteTodo, removeTodo } from "../toolkitRedux/todoSlice";

const Todo = ({ text, todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeTodo(todo.id));
    // setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    dispatch(setCompleteTodo(todo.id));
    // setTodos(
    //   todos.map((item) => {
    //     if (item.id === todo.id) {
    //       return {
    //         ...item,
    //         completed: !item.completed,
    //       };
    //     }
    //     return item;
    //   })
    // );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
