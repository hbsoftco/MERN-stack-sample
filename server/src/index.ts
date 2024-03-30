import { config } from 'dotenv-safe';
import express, { json, urlencoded } from 'express';
import RouterManager from '@src/routes';
import morgan from 'morgan';

class Server {
  private app: express.Application;
  private port: string | number;

  constructor(port: string | number) {
    config();
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(morgan('tiny'));
  }

  private initializeRoutes(): void {
    RouterManager.initializeRoutes(this.app);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const PORT = process.env.APP_PORT ?? 5000;

const server = new Server(PORT);
server.listen();
