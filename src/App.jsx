import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

/**
 * The main App component. It renders the AddTodo and Todo components.
 *
 * Returns:
 * A JSX fragment containing the AddTodo and Todo components.
 */
function App() {
  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
