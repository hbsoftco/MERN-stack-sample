import { Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  image: string;
  description?: string;
}
