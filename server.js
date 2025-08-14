import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Habit from './models/Habit.js';

dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.post('/habits', async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
