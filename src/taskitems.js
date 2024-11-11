import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, updateTaskStatus }) => {
  const toggleStatus = () => updateTaskStatus(task.id, !task.completed);

  return (
    <div className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <button className="status-toggle-btn" onClick={toggleStatus}>
          {task.completed ? '✅ Completed' : '❗ Mark Complete'}
        </button>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <span className="task-due-date">Due: {task.dueDate}</span>
        <span className="task-assignee">Assigned to: {task.assignee}</span>
      </div>
    </div>
  );
};

export default TaskItem;
