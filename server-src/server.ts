import * as express from 'express';
import {Application } from 'express';
import {HeroesEndpoint} from './heroes.endpoint';
import {mongoConnectionService} from './services/services.modules';

class Server {
  app: Application = express();

  constructor() {
    this.app.set('mongoConn', mongoConnectionService);
    this.app.use(express.static(__dirname + '/../../../dist'));
    this.app.use('/heroes', HeroesEndpoint);
    this.app.listen(process.env.PORT || 8081);
  }
}


const server: Server = new Server();
