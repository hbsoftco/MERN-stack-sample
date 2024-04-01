import { Request, Response } from 'express';
import { Blog } from '@src/models/blog.model';
import { IBlog } from '@src/interfaces/IBlog';
import BaseController from './controller';

class BlogController extends BaseController {
  constructor() {
    super();
  }

  // Add new Blog
  static async addBlog(req: Request, res: Response): Promise<void> {
    try {
      const blog = new Blog<IBlog>(req.body);
      await blog.save();

      res.status(201).json({ message: 'added successfully' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  static async getAllBlogs(req: Request, res: Response): Promise<void> {
    // Fake data for demonstration
    const books = [
      { id: 1, name: 'Book 1' },
      { id: 2, name: 'Book 2' },
      { id: 3, name: 'Book 3' },
    ];

    await res.json(books);
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
    }
  }

  static removeBlog(req: Request, res: Response): void {
    res.json({ message: 'removed successfully' });
  }
}

export default BlogController;
