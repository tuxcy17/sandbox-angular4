import {HeroesService} from './heroes.service';
import {MongoConnectionService} from './db.services';


export const
  heroesService = HeroesService.getInstance(),
  mongoConnectionService = MongoConnectionService.getInstance();


