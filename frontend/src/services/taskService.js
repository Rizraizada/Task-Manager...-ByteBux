import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const taskService = {
  getAllTasks: async () => {
    return await axios.get(`${BASE_URL}/tasks`);
  },

  deleteTask: async (taskId) => {
    return await axios.delete(`${BASE_URL}/tasks/${taskId}`);
  },

  createTask: async (task) => {
    return await axios.post(`${BASE_URL}/tasks`, task);
  },

  updateTask: async (taskId, task) => {
    return await axios.put(`${BASE_URL}/tasks/${taskId}`, task);
  }
};

export default taskService;
