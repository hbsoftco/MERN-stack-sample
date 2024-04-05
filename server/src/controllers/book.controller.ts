import { Request, Response } from 'express';
import { Book } from '@src/models/book.model';
import { IBook } from '@src/interfaces/IBook';
import BaseController from './controller';

class BookController extends BaseController {
  // Add new book
  static async addBook(req: Request, res: Response): Promise<void> {
    try {
      const book = new Book<IBook>(req.body);
      await book.save();

      res.status(201).json({ message: 'Added successfully' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get all books
  static async getAllBooks(req: Request, res: Response): Promise<void> {
    try {
      const books = await Book.find();

      res.status(201).json({
        message: 'All Books',
        data: books,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get book detail
  static async getBook(req: Request, res: Response): Promise<void> {
    try {
      const bookId = req.params.id;
      const book = await Book.findById(bookId);
      res.status(201).json({
        message: 'Book detail',
        data: book,
      });
    } catch (error) {
      super.setLogger('info', error);
    }
  }

  // Get book detail by isbn
  static async getBookByISBN(req: Request, res: Response): Promise<void> {
    try {
      const isbn = req.params.id;
      const book = await Book.findById(isbn);
      res.status(201).json({
        message: 'Book detail',
        data: book,
      });
    } catch (error) {
      super.setLogger('info', error);
    }
  }

  static async getBookByAuthor(req: Request, res: Response): Promise<void> {
    try {
      const author = req.params.author;
      // Fake data for demonstration
      const book = { id: 1, name: 'Book 1' };
      super.setLogger('info', 'book');
      res.json({
        book,
        author,
      });
    } catch (error) {
      super.setLogger('info', error);
    }
  }

  static removeBook(req: Request, res: Response): void {
    res.json({ message: 'removed successfully' });
  }
}

export default BookController;
