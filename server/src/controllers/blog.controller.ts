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

      res.status(201).json({ message: 'Added successfully' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get all blogs
  static async getAllBlogs(req: Request, res: Response): Promise<void> {
    try {
      const blogs = await Blog.find();

      res.status(201).json({
        message: 'All Blogs',
        data: blogs,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get blog detail
  static async getBlog(req: Request, res: Response): Promise<void> {
    try {
      const blogId = req.params.id;
      const blog = await Blog.findById(blogId);
      res.status(201).json({
        message: 'Blog detail',
        data: blog,
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
