import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    /**
     * Adds a new todo item to the state with a unique id and text from the action payload.
     *
     * @param {Object} state - The current state of the todo slice.
     * @param {Object} action - The action containing the payload with the text for the new todo.
     */
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    /**
     * Removes a todo item from the state by filtering out the one with the matching id
     * from the action payload.
     *
     * @param {Object} state - The current state of the todo slice.
     * @param {Object} action - The action containing the payload with the id of the todo to remove.
     */
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
