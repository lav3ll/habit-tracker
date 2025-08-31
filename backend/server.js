import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Habit from './models/Habit.js'; // ✅ make sure this has the correct path and `.js`
import User from './models/User.js';
import bcrypt from 'bcryptjs';

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

//Route to fetch user Data

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

// Sign Up route
app.post('/users', async (req, res) => {
  console.log('POST /users body:', req.body);
  try {
    const {
      username,
      email,
      password,
      timezone,
      reminderTime,
      avatar,
      focus,
      motivation,
    } = req.body;

    if (!username || !email || !password || !timezone) {
      return res.status(422).json({ error: 'Missing required fields' });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      passwordHash,
      timezone,
      reminderTime,
      avatar,
      focus,
      motivation,
    });

    // never return passwordHash
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      timezone: user.timezone,
      reminderTime: user.reminderTime,
      avatar: user.avatar,
      focus: user.focus,
      motivation: user.motivation,
      createdAt: user.createdAt,
    });
  } catch (err) {
    if (err.code === 11000) {
      // duplicate key (unique index)
      const field = Object.keys(err.keyPattern || {})[0] || 'field';
      return res.status(409).json({ error: `${field} already in use` });
    }
    if (err.name === 'ValidationError') {
      return res.status(422).json({
        errors: Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, v.message])
        ),
      });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server and listen on port 5000
app.listen(5000, () => console.log('Server running on port 5000'));
