import { Router } from 'express';
import UserController from '@src/controllers/user.controller';

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // GET /users
    this.router.get('/', UserController.getAllUsers);
    // POST register a new user
    this.router.post('/register', UserController.registerUser);
    // POST login user
    this.router.post('/login', UserController.loginUser);
  }
}

export default new UserRouter();
