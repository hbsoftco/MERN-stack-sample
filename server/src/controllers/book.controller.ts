import { Request, Response } from 'express';
import BaseController from './controller';

class BookController extends BaseController {
  static async getAllBooks(req: Request, res: Response): Promise<void> {
    // Fake data for demonstration
    const books = [
      { id: 1, name: 'Book 1' },
      { id: 2, name: 'Book 2' },
      { id: 3, name: 'Book 3' },
    ];
    res.json(books);
  }

  static getBook(req: Request, res: Response): void {
    try {
      const bookId = req.params.id;
      // Fake data for demonstration
      const book = { id: 1, name: 'Book 1' };
      super.setLogger('info', 'book');
      res.json({
        book,
        bookId,
      });
    } catch (error) {
      super.setLogger('info', error);
    }
  }

  static async getBookByISBN(req: Request, res: Response): Promise<void> {
    try {
      const isbn = req.params.isbn;
      // Fake data for demonstration
      const book = { id: 1, name: 'Book 1' };
      super.setLogger('info', 'book');
      res.json({
        book,
        isbn,
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

  static addBook(req: Request, res: Response): void {
    res.json({ message: 'added successfully' });
  }

  static removeBook(req: Request, res: Response): void {
    res.json({ message: 'removed successfully' });
  }
}

export default BookController;
