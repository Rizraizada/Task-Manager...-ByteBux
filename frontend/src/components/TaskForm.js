import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './TaskForm.css';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [errors, setErrors] = useState({ title: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const validateText = (text) => {
    const regex = /^[a-zA-Z\s]*$/;  
    return regex.test(text);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (validateText(value)) {
      setTitle(value);
      setErrors((prevErrors) => ({ ...prevErrors, title: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, title: 'Invalid characters' }));
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (validateText(value)) {
      setDescription(value);
      setErrors((prevErrors) => ({ ...prevErrors, description: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, description: 'Invalid characters' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.title || errors.description) {
      return;
    }
    if (taskToEdit) {
      // Update existing task
      onSave({ _id: taskToEdit._id, title, description, completed });
      Swal.fire({
        icon: 'success',
        title: 'Task Updated!',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      // Add new task
      onSave({ title, description, completed });
      Swal.fire({
        icon: 'success',
        title: 'Task Added!',
        showConfirmButton: false,
        timer: 1500
      });
    }
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <div className="task-form-container">
      <div className="task-form-card">
        <h2>{taskToEdit ? 'Update Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className={errors.title ? 'invalid' : ''}
              required
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className={errors.description ? 'invalid' : ''}
              required
            />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              Completed
            </label>
          </div>
          <button type="submit">{taskToEdit ? 'Update' : 'Add'} Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
