import { AuthRequest } from '@src/interfaces/IAuthRequest';
import { Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

class AuthMiddleware {
  public authenticateToken(req: AuthRequest, res: Response, next: NextFunction): void {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Unauthorized: No token provided' });
    } else {
      try {
        const decodedToken = verify(token, process.env.SECRET_KEY!) as JwtPayload;
        req.userId = decodedToken.userId;
        next();
      } catch (error) {
        res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
    }
  }
}

export default new AuthMiddleware();
