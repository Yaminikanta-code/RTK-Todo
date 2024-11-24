import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

/**
 * A functional component that renders a form for adding new todos.
 * It maintains an input state for the text of the todo being added.
 * When the form is submitted, it dispatches the addTodo action with
 * the current input value and clears the input field.
 *
 * Hooks:
 * - useState: Used to store the current input value.
 * - useDispatch: Used to obtain the dispatch function from React Redux.
 *
 * Returns:
 * A JSX element containing a form with an input field and a submit button.
 */
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  /**
   * A function that is called when the form is submitted. It prevents the
   * default form submission behavior, dispatches the addTodo action with the
   * current input state, and then sets the input state to an empty string.
   * @param {Event} e - The form submission event
   */
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
