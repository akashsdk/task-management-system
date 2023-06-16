import React, { useState } from "react";



export default function Assignment() {

    const [tasks, setTasks] = useState([
        {
          id: 1,
          name: "Task 1",
          description: "Description 1",
          dueDate: "",
          assignee: "Assignee 1",
        },
        {
          id: 2,
          name: "Task 2",
          description: "Description 2",
          dueDate: "",
          assignee: "Assignee 2",
        },
        {
          id: 3,
          name: "Task 3",
          description: "Description 3",
          dueDate: "",
          assignee: "Assignee 3",
        },
      ]);
      
      const [newTask, setNewTask] = useState({
        name: "",
        description: "",
        dueDate: "",
        assignee: "",
      });
      
      const [errors, setErrors] = useState({});
      
      const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          const taskId = tasks.length + 1;
          const task = { id: taskId, ...newTask };
          setTasks([...tasks, task]);
          setNewTask({ name: "", description: "", dueDate: "", assignee: "" });
          setErrors({});
        }
      };
      const validateForm = () => {
        let isValid = true;
        let errors = {};
      
        if (newTask.name.trim() === "") {
          errors.name = "Task name is required";
          isValid = false;
        }
      
        if (newTask.description.trim() === "") {
          errors.description = "Description is required";
          isValid = false;
        }
      
        if (newTask.dueDate.trim() === "") {
          errors.dueDate = "Due date is required";
          isValid = false;
        }
      
        if (newTask.assignee.trim() === "") {
          errors.assignee = "Assignee is required";
          isValid = false;
        }
      
        setErrors(errors);
        return isValid;
      };
  return (
    <div>
      <h1>Task Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Task Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
            style={{
                marginTop:'2px',
                marginLeft:'10px',
            }}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            style={{
                marginTop:'20px',
                marginLeft:'8px',

            }}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
            style={{
                marginTop:'20px',
                marginLeft:'22px',
            }}
          />
          {errors.dueDate && <span className="error">{errors.dueDate}</span>}
        </div>

        <div>
          <label htmlFor="assignee">Assignee:</label>
          <input
            type="text"
            id="assignee"
            name="assignee"
            value={newTask.assignee}
            onChange={handleInputChange}
            style={{
                marginTop:'20px',
                marginLeft:'22px',
            }}
          />
          {errors.assignee && <span className="error">{errors.assignee}</span>}
        </div>

        <button type="submit" style={{
                marginTop:'20px'
            }}>Create Task</button>
      </form>

      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
