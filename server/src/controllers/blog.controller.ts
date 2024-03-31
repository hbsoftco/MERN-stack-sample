import { Request, Response } from 'express';
import BaseController from './controller';

class BlogController extends BaseController {
  constructor() {
    super();
  }

  static getAllBlogs(req: Request, res: Response): void {
    // Fake data for demonstration
    const books = [
      { id: 1, name: 'Book 1' },
      { id: 2, name: 'Book 2' },
      { id: 3, name: 'Book 3' },
    ];

    res.json(books);
  }

  static getBlog(req: Request, res: Response): void {
    try {
      const blogId = req.params.id;
      // Fake data for demonstration
      const book = { id: 1, name: 'Book 1' };
      super.setLogger('info', 'book');
      res.json({
        book,
        blogId,
      });
    } catch (error) {
      super.setLogger('info', error);
      // console.log('log =================================>', error);
    }
  }

  static addBlog(req: Request, res: Response): void {
    res.json({ message: 'added successfully' });
  }

  static removeBlog(req: Request, res: Response): void {
    res.json({ message: 'removed successfully' });
  }
}

export default BlogController;
