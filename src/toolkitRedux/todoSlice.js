import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: INITIAL_STATE, 
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    setCompleteTodo(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, setCompleteTodo, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
