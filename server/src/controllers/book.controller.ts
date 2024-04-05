import { Request, Response } from 'express';
import { Book } from '@src/models/book.model';
import { IBook } from '@src/interfaces/IBook';
import { Review } from '@src/models/book-review.model';
import { IReview } from '@src/interfaces/IReview';
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

  // Get books by ISBN
  static async getBookByISBN(req: Request, res: Response): Promise<void> {
    try {
      const isbn = req.params.isbn;
      const books = await Book.find({ isbn: isbn });

      if (books.length === 0) {
        res.status(404).json({ message: 'No books found with the provided ISBN' });
        return;
      }

      res.status(200).json({
        message: 'Books found by ISBN',
        data: books,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get books by author
  static async getBooksByAuthor(req: Request, res: Response): Promise<void> {
    try {
      const author = req.params.author;
      const books = await Book.find({ author: author });

      if (books.length === 0) {
        res.status(404).json({ message: `No books found by author '${author}'` });
        return;
      }

      res.status(200).json({
        message: `Books found by author '${author}'`,
        data: books,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get books by title
  static async getBooksByTitle(req: Request, res: Response): Promise<void> {
    try {
      const title = req.params.title;
      const books = await Book.find({ title: { $regex: title, $options: 'i' } });

      if (books.length === 0) {
        res.status(404).json({ message: `No books found with the title '${title}'` });
        return;
      }

      res.status(200).json({
        message: `Books found with the title '${title}'`,
        data: books,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get reviews for a book
  static async getBookReviews(req: Request, res: Response): Promise<void> {
    try {
      const bookId = req.params.id;
      const reviews = await Review.find({ bookId: bookId });

      if (reviews.length === 0) {
        res.status(404).json({ message: `No reviews found for the book with ID '${bookId}'` });
        return;
      }

      res.status(200).json({
        message: `Reviews found for the book with ID '${bookId}'`,
        data: reviews,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async addReview(req: Request, res: Response): Promise<void> {
    try {
      const reviewData = req.body;

      const review = new Review<IReview>(reviewData);
      await review.save();

      res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static removeBook(req: Request, res: Response): void {
    res.json({ message: 'removed successfully' });
  }
}

export default BookController;
