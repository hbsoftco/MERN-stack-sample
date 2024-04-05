import { Request, Response } from 'express';
import { Get, Route } from '@tsoa/runtime';
import User from '@src/models/user.model';
import { IUser } from '@src/interfaces/IUser';

@Route('users')
class UserController {
  // Add new user
  static async registerUser(req: Request, res: Response): Promise<void> {
    try {
      const user = new User<IUser>(req.body);
      await user.save();

      res.status(201).json({ message: 'Added successfully' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // Get all books
  @Get('/')
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const books = await User.find();

      res.status(201).json({
        message: 'All Users',
        data: books,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default UserController;
