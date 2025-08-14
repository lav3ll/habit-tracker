import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Habit from './models/Habit.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true, // Use new server discovery and monitoring engine
  })
  .then(() => console.log('MongoDB connected')) // Log success message
  .catch((err) => console.error(err)); // Log any connection errors

// Route to create a new habit
app.post('/habits', async (req, res) => {
  try {
    const habit = new Habit(req.body); // Create a new habit from request body
    await habit.save(); // Save habit to MongoDB
    res.json(habit); // Respond with the saved habit
  } catch (err) {
    res.status(400).json({ error: err.message }); // Handle errors
  }
});

// Route to fetch all habits
app.get('/habits', async (req, res) => {
  try {
    const habits = await Habit.find(); // Fetch all habits from MongoDB
    res.json(habits); // Respond with the list of habits
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors
  }
});

// Route to update a habit by its ID
app.patch('/habits/:id', async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });
    res.json(habit); // Respond with updated habit
  } catch (err) {
    res.status(400).json({ error: err.message }); // Handle errors
  }
});

// Route to delete a habit by its ID
app.delete('/habits/:id', async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id); // Delete habit from MongoDB
    res.json({ message: 'Habit deleted' }); // Respond with confirmation
  } catch (err) {
    res.status(400).json({ error: err.message }); // Handle errors
  }
});

// Start server and listen on port 5000
app.listen(5000, () => console.log('Server running on port 5000'));

app.get('/habits', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/habits/:id', async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/habits/:id', async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Habit deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
