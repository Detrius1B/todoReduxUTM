import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const INITIAL_STATE = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
      console.log("set", state.todos);
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
      console.log("adding", action.payload);
    },
    setCompleteTodo(state, action) {
      state.todos.map(({el}) => console.log(el))
      // state.todos[id].completed = !state.todos[id].completed
      // const todo = state.todos[id]
      // todo.completed = !todo.completed;

      // state.todos = state.todos.map(({item}) => {
      //   if (item.id === action.payload.id) {
      //     return {
      //       ...item,
      //       completed: !item.completed,
      //     };
      //   }
      //   return item;
      // });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, setCompleteTodo, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
