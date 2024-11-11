import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, dueDate, assignee });
    setTitle('');
    setDescription('');
    setDueDate('');
    setAssignee('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Create a Task</h2>
      <input
        className="task-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="task-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="task-input"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <input
        className="task-input"
        placeholder="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
