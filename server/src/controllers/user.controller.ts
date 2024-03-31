import { Request, Response } from 'express';
import { Get, Route } from '@tsoa/runtime';

@Route('users')
class UserController {
  @Get('/')
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    // Fake data for demonstration
    const users = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
    ];
    res.json(users);
  }
}

export default UserController;
