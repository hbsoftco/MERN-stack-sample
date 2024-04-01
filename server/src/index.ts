import { config } from 'dotenv-safe';
import express, { json, urlencoded } from 'express';
import RouterManager from '@src/routes';
import { serve, setup } from 'swagger-ui-express';
import morgan from 'morgan';
import { ConnectOptions } from 'mongoose';
import Database from '@src/config/db.config';
import cors from 'cors';

class Server {
  private app: express.Application;
  private port: string | number;

  constructor(port: string | number) {
    config();
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.connectToDatabase();
  }

  private connectToDatabase(): void {
    const uri = process.env.MONGO_URL;
    const options: ConnectOptions = {
      // add your options here if needed
    };

    const db = Database.getInstance(uri!, options);
    db.connect();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(morgan('tiny'));
    this.app.use(
      '/api/docs',
      serve,
      setup(undefined, {
        swaggerOptions: {
          url: '/swagger.json',
        },
      }),
    );
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
