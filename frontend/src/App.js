import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';  
import TaskForm from './components/TaskForm';  
import Header from './components/Header';  
import Footer from './components/Footer';  
import './App.css';  

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');  
      setTasks(response.data);  
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      fetchTasks();  
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSaveTask = async (task) => {
    try {
      if (isEditing && selectedTask) {
        await axios.put(`http://localhost:5000/tasks/${selectedTask._id}`, task);
      } else {
        await axios.post('http://localhost:5000/tasks', task);
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

  return (
    <div className="App">
      <Header />
      <main>
        <TaskForm onSave={handleSaveTask} taskToEdit={selectedTask} />
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleEditTask} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
