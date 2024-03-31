import { Request, Response, NextFunction } from 'express';
import { logger } from '@src/utils/logger';
import { Level } from 'pino';

// Union Types
// type LogType = 'info' | 'error' | 'warning';

class BaseController {
  public static setLogger(type: Level, value: unknown) {
    try {
      switch (type) {
        case 'info':
          logger.info(value);
          break;

        case 'error':
          logger.error(value);
          break;

        case 'warn':
          logger.warn(value);
          break;

        default:
          logger.info(value);
          break;
      }
    } catch (error) {
      console.log('==========================>', error);
    }
  }

  static errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    if (!err) {
      next();
    }
    console.error(`An error occurred: ${err.message}`);
    logger.error('Hello, world!');
    res.status(500).json({ error: 'Internal Server Error' });
  }

  // static logger(req: Request, res: Response, next: NextFunction): void {
  //   console.log(`${req.method} ${req.path}`);
  //   next();
  // }
}

export default BaseController;
