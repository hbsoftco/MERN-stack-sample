import mongoose, { Document } from 'mongoose';

export interface IReview extends Document {
  title: string;
  content: string;
  rating: number;
  bookId: mongoose.Types.ObjectId;
}
