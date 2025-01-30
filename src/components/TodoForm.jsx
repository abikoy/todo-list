import React, { useState } from 'react';

const TodoForm = ({ addTodo, day }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, day);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Add task for ${day}`}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;