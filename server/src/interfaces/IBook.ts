import { Document } from 'mongoose';
export interface IBook extends Document {
  title: string;
  author: string;
  publisher: string;
  publicationYear: number;
  isbn: string;
  genre: string;
  numberOfPages: number;
  summary: string;
  coverImage: string;
  price: number;
}
