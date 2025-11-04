import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  function addTodo() {
    if (newTodos.trim() === "") return;
    setTodos([...todos, newTodos]);
    setNewTodos("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((todos, i) => i !== index));
  }

  return (
    <div>
      <h2>TodoApp</h2>
      <input
        type="text"
        placeholder="enter your todo "
        value={newTodos}
        onChange={(e) => setNewTodos(e.target.value)}
      />
      <button onClick={addTodo}>add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
