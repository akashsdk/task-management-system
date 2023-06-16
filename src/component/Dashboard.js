import React , { useState } from 'react'

  
  

export default function Dashboard() {
  
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', dueDate: '2023-06-30', status: 'In Progress' },
    { id: 2, name: 'Task 2', dueDate: '2023-07-15', status: 'Not Started' },
    { id: 3, name: 'Task 3', dueDate: '2023-07-16', status: 'Completed' },
    { id: 4, name: 'Task 4', dueDate: '2023-07-17', status: 'Not Started' },
    { id: 5, name: 'Task 5', dueDate: '2023-07-18', status: 'Completed' },
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      )
    );
  };
  return (
    <div>
      <div>
      <h1>Task Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
              <td>
                {task.status !== 'Completed' && (
                  <button onClick={() => handleTaskCompletion(task.id)}>
                    Mark as Complete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
