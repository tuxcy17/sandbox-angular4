import * as express from 'express';
import {Application } from 'express';
import {MongoConnectionService} from './services/db.services';
import {HeroesEndpoint} from './heroes.endpoint';

class Server {
  app: Application = express();

  constructor() {
    this.app.use(express.static(__dirname + '/../../../dist'));
    this.app.use('/heroes', HeroesEndpoint);
    this.app.listen(process.env.PORT || 8081);
  }
}

const server: Server = new Server();
