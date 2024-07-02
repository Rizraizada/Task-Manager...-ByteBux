import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import taskService from '../services/taskService';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskService.getAllTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSaveTask = async (task) => {
    try {
      if (isEditing && selectedTask) {
        await taskService.updateTask(selectedTask._id, task);
      } else {
        await taskService.createTask(task);
      }
      setIsEditing(false);
      setSelectedTask(null);
      fetchTasks();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedTask(null);
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      {isEditing ? (
        <TaskForm task={selectedTask} onSave={handleSaveTask} onCancel={handleCancelEdit} />
      ) : (
        <TaskForm onSave={handleSaveTask} />
      )}
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleEditTask} />
    </div>
  );
};

export default TaskManager;
