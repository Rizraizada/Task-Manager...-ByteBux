const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db.config');

dotenv.config(); 

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
