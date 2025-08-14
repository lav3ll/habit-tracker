import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completedDates: [Date],
});

export default mongoose.model('Habit', habitSchema);
