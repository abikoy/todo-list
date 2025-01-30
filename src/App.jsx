import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  });

  const addTodo = (text, day) => {
    setTodos(prev => ({
      ...prev,
      [day]: [...prev[day], { id: Date.now(), text, completed: false }]
    }));
  };

  const toggleTodo = (id, day) => {
    setTodos(prev => ({
      ...prev,
      [day]: prev[day].map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  const deleteTodo = (id, day) => {
    setTodos(prev => ({
      ...prev,
      [day]: prev[day].filter(todo => todo.id !== id)
    }));
  };

  return (
    <div className="app">
      <h1>Weekly Todo List</h1>
      <div className="weekly-grid">
        {Object.keys(todos).map(day => (
          <div key={day} className="day-column">
            <h2>{day}</h2>
            <TodoForm addTodo={addTodo} day={day} />
            <TodoList 
              todos={todos[day]} 
              toggleTodo={(id) => toggleTodo(id, day)} 
              deleteTodo={(id) => deleteTodo(id, day)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;