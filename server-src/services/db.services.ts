import {connect, Connection, connection} from 'mongoose';

const mongoUrl = 'mongodb://admin:admin@ds145293.mlab.com:45293/app-test';

// Singleton
export class MongoConnectionService {
  private static instance: MongoConnectionService;

  db: Connection;

  private constructor() {
    console.log('connect');
    connect(mongoUrl, {
      useMongoClient: true,
    });
    this.db = connection;
    this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }

  static getInstance(): MongoConnectionService {
    if (!MongoConnectionService.instance) {
      MongoConnectionService.instance = new MongoConnectionService();
    }
    return MongoConnectionService.instance;
  }

  public errorHandler(): void {
    console.log('oops an error');
  }
}
