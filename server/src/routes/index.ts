import { Application, Router } from 'express';
import userRouter from '@src/routes/user.routes';
import userV2Router from '@src/routes/user.v2.routes';
import bookRoutes from '@src/routes/book.routes';

class RouterManager {
  static initializeRoutes(app: Application): void {
    const v1Router = Router();
    const v2Router = Router();

    // v1 routes
    v1Router.use('/users', userRouter.router);
    v1Router.use('/books', bookRoutes.router);

    // v2 routes
    v2Router.use('/users', userV2Router.router);

    app.use('/api/v1', v1Router);
    app.use('/api/v2', v2Router);
  }
}

export default RouterManager;
