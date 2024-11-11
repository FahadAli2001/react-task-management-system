import React, { useState } from 'react';
import TaskList from './tasklist';
import TaskForm from './taskform';
import UserFilter from './userfilter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ assignee: '', status: '' });

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: status } : task));
  };

  const filteredTasks = tasks.filter(task => {
    const byAssignee = filters.assignee ? task.assignee === filters.assignee : true;
    const byStatus = filters.status === 'completed' ? task.completed : filters.status === 'pending' ? !task.completed : true;
    return byAssignee && byStatus;
  });

  return (
    <div>
      <h1>Task Management System</h1>
      <UserFilter setFilters={setFilters} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default App;
