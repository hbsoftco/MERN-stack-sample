import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  name: string;
  family: string;
  mobile: string;
  age: number;
  website: string;
  sex: 'male' | 'female' | 'other';
}
