import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const todos = useSelector((state) => state.todoSlice.todos);

  const copmletedCount = () => {
    const completed = todos.filter((todo) => todo.completed === true);
    return completed.length
  }

  const uncopmletedCount = () => {
    const uncompleted = todos.filter((todo) => todo.completed === false);
    return uncompleted.length
  }

  return (
    <>
      <header>
        <div>
          <h3>Total Count: {todos.length}</h3>
          <h3 style={{color: "#0bd4a2"}}>Done: {copmletedCount()}</h3>
          <h3 style={{color: "#ff6f47"}}>In Progress: {uncopmletedCount()}</h3>
        </div>
      </header>
    </>
  );
};

export default Count;
