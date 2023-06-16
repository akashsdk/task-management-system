import React, { useState } from 'react';


export default function TaskFiltering() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', dueDate: '2023-06-30', status: 'In Progress', assignee: 'John Doe' },
        { id: 2, name: 'Task 2', dueDate: '2023-07-15', status: 'Not Started', assignee: 'Jane Smith' },
        { id: 3, name: 'Task 3', dueDate: '2023-07-10', status: 'Completed', assignee: 'John Doe' },
      ]);
    
      const [filteredTasks, setFilteredTasks] = useState(tasks);
      const [filter, setFilter] = useState('all');
      const [sort, setSort] = useState('');
    
      const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
        applyFilters(selectedFilter, sort);
      };
    
      const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSort(selectedSort);
        applyFilters(filter, selectedSort);
      };
    
      const applyFilters = (selectedFilter, selectedSort) => {
        let filteredTasks = tasks;
    
        if (selectedFilter !== 'all') {
          filteredTasks = tasks.filter((task) => task.status === selectedFilter);
        }
    
        if (selectedSort) {
          filteredTasks.sort((a, b) => {
            if (selectedSort === 'dueDate') {
              return new Date(a.dueDate) - new Date(b.dueDate);
            } else if (selectedSort === 'priority') {
              return a.priority - b.priority;
            }
          });
        }
    
        setFilteredTasks(filteredTasks);
      };
  return (
    <div>
    <h1>Task Dashboard</h1>

    <div>
      <label htmlFor="filter" >Filter:</label>
      <select id="filter" value={filter} 
      onChange={handleFilterChange}
      style={{
        marginLeft:"25px"
      }}>
        <option value="all">All Tasks</option>
        <option value="In Progress">In Progress</option>
        <option value="Not Started">Not Started</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    <div style={{
        marginTop:"10px"
      }}>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" value={sort} 
      onChange={handleSortChange}
      style={{
        marginLeft:"10px"
      }}>
        <option value="">None</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>

    <h2>Task List</h2>
    <table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Assignee</th>
        </tr>
      </thead>
      <tbody>
        {filteredTasks.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.dueDate}</td>
            <td>{task.status}</td>
            <td>{task.assignee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
