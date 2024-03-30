import { Request, Response } from 'express';

class BookController {
  static getAllBooks(req: Request, res: Response): void {
    // Fake data for demonstration
    const books = [
      { id: 1, name: 'Book 1' },
      { id: 2, name: 'Book 2' },
      { id: 3, name: 'Book 3' },
    ];
    res.json(books);
  }
}

export default BookController;
