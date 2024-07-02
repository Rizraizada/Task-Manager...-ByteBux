import React from 'react';
import './Task.css';  

const Task = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(task._id);  
  };

  const handleUpdate = () => {
    onUpdate(task._id);   
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
