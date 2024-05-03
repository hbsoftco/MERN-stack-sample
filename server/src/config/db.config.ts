import { Logger } from '@src/utils/logger';
import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

class Database {
  private static instance: Database | null = null;
  private readonly uri: string;
  private readonly options: ConnectOptions;
  private connection: Mongoose;
  logger = Logger.getInstance();

  private constructor(uri: string, options: ConnectOptions) {
    this.uri = uri;
    this.options = options;
    this.connection = mongoose;
  }

  // Singleton design pattern
  public static getInstance(uri: string, options: ConnectOptions): Database {
    if (!Database.instance) {
      Database.instance = new Database(uri, options);
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      await this.connection.connect(this.uri, this.options);
      this.logger.info('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  public disconnect(): void {
    this.connection.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

export default Database;
