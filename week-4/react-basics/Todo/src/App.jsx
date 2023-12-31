import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    if (title.trim() && description.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        { title, description }
      ]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="card input-section">
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter title"
        />
        <br />
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Enter description"
        />
        <button onClick={addTodo}>ADD TODO</button>
      </div>
      <div className="card todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <label>Title</label>
            <h4>{todo.title}</h4>
            <label>Description</label>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
