import { Router } from 'express';
import BookController from '@src/controllers/book.controller';
import AuthMiddleware from '@src/middlewares/auth.middleware';

class BookRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // GET /books
    this.router.get('/', BookController.getAllBooks);
    // GET a book by id
    this.router.get('/:id', BookController.getBook);
    // GET books based on ISBN
    this.router.get('/isbn/:isbn', BookController.getBookByISBN);
    // GET books based on author
    this.router.get('/author/:author', BookController.getBooksByAuthor);
    // GET books based on title
    this.router.get('/title/:title', BookController.getBooksByTitle);
    // POST add new book
    this.router.post('/', AuthMiddleware.authenticateToken, BookController.addBook);
    // DELETE remove a book
    this.router.delete('/:id', BookController.removeBook);

    // Reviews
    // GET book reviews
    this.router.get('/:id/reviews', BookController.getBookReviews);
    // POST add review for a book
    this.router.post('/reviews', AuthMiddleware.authenticateToken, BookController.addReview);
    // DELETE remove a review
    this.router.delete('/:reviewId/reviews', AuthMiddleware.authenticateToken, BookController.removeReview);
  }
}

export default new BookRouter();
