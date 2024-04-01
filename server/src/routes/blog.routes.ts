import { Router } from 'express';
import BlogController from '@src/controllers/blog.controller';

class BookRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // GET /blogs
    this.router.get('/', BlogController.getAllBlogs);
    // GET a blog by id
    this.router.get('/:id', BlogController.getBlog);
    // POST add new blog
    this.router.post('/', BlogController.addBlog);
    // DELETE remove a blog
    this.router.delete('/:id', BlogController.removeBlog);
  }
}

export default new BookRouter();
