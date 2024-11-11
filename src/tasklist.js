import React from 'react';
import TaskItem from './taskitems';
import './TaskList.css';

const TaskList = ({ tasks, updateTaskStatus }) => (
  <div className="task-list">
    <h2 className="task-list-heading">Tasks</h2>
    {tasks.length ? (
      <div className="task-list-items">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
        ))}
      </div>
    ) : (
      <p className="no-tasks-message">No tasks available</p>
    )}
  </div>
);

export default TaskList;
