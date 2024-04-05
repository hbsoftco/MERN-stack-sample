import { Router } from 'express';
import UserController from '@src/controllers/user.controller';
import authMiddleware from '@src/middlewares/auth.middleware';

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // POST register a new user
    this.router.post('/register', UserController.registerUser);
    // POST login user
    this.router.post('/login', UserController.loginUser);

    // GET users - need token
    this.router.get('/', authMiddleware.authenticateToken, UserController.getAllUsers);
  }
}

export default new UserRouter();
