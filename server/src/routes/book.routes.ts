import { Router } from 'express';
import BookController from '@src/controllers/book.controller';

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
    // GET book details based on ISBN
    this.router.get('/isbn/:isbn', BookController.getBookByISBN);
    // GET book details based on author
    this.router.get('/author/:author', BookController.getBookByAuthor);
    // POST add new book
    this.router.post('/', BookController.addBook);
    // DELETE remove a book
    this.router.delete('/:id', BookController.removeBook);
  }
}

export default new BookRouter();
