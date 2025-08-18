import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Habit from './models/Habit.js'; // ✅ make sure this has the correct path and `.js`

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected')) // Log success message
  .catch((err) => console.error(err)); // Log any connection errors

// Route to create a new habit
app.post('/habits', async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to fetch all habits
app.get('/habits', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to update a habit by its ID
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

// Route to delete a habit by its ID
app.delete('/habits/:id', async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Habit deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server and listen on port 5000
app.listen(5000, () => console.log('Server running on port 5000'));
