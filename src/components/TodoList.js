import React from "react";
import Todo from "./Todo";
// import { useSelector } from "react-redux";

const TodoList = ({  filteredTodos }) => {
  // const todos = useSelector((state) => state.todoSlice.todos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
