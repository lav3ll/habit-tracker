import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username required'],
      minlength: [3, 'Min 3 chars'],
      maxlength: [24, 'Max 24 chars'],
      match: [/^[a-zA-Z0-9_]+$/, 'Alphanumeric/underscore only'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
      unique: true,
    },
    passwordHash: { type: String, required: true },
    timezone: { type: String, required: [true, 'Timezone required'] },
    reminderTime: { type: String },
    avatar: { type: String },
    focus: { type: String },
    motivation: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
