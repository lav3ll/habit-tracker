import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  frequency: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  completedDates: { type: [Date], default: [] },
  notes: { type: String, default: '' },
});

export default mongoose.model('Habit', habitSchema);
