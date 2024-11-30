const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./backend/routes/JobRoutes'); // Adjust path as needed
const authMiddleware = require('./backend/middleware/authMiddleware'); // Adjust path as needed
const http = require('http'); // Import http module
const socketio = require('socket.io'); // Import socket.io
require('dotenv').config(); // For loading environment variables
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');
app.use(cors());


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.get('/', (req, res) => {
  res.send('Welcome to the Job Listing Portal');
});

app.use('/api', jobRoutes);

const server = http.createServer(app);
const io = socketio(server);

// Handle WebSocket connections
io.on('connection', socket => {
  console.log('New WebSocket connection');

  // You can add more event handlers for your WebSocket connection here

  // Example of handling a disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

