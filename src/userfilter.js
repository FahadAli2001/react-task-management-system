import React from 'react';
import './UserFilter.css';

const UserFilter = ({ setFilters }) => {
  const handleAssigneeChange = (e) => setFilters((prev) => ({ ...prev, assignee: e.target.value }));
  const handleStatusChange = (e) => setFilters((prev) => ({ ...prev, status: e.target.value }));

  return (
    <div className="user-filter">
      <h2 className="filter-heading">Filter Tasks</h2>
      <div className="filter-inputs">
        <input
          className="filter-input"
          placeholder="Filter by Assignee"
          onChange={handleAssigneeChange}
        />
        <select className="filter-select" onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default UserFilter;
