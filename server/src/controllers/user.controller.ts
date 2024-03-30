import { Request, Response } from 'express';

class UserController {
  static getAllUsers(req: Request, res: Response): void {
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
