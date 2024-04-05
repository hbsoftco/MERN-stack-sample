import { IUser } from '@src/interfaces/IUser';
import mongoose, { Schema, Document } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  family: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  website: {
    type: String,
    trim: true,
  },
  sex: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
});

// Middleware to hash password before saving
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const hashedPassword = await hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error as Error);
  }
});

const User = mongoose.model<IUser & Document>('User', userSchema);

export default User;
