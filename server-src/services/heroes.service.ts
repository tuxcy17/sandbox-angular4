import {Hero} from '../models/hero';

export class HeroesService {
  private static instance: HeroesService;

  private constructor() {
  }

  static getInstance(): HeroesService {
    if (!HeroesService.instance) {
      HeroesService.instance = new HeroesService();
    }
    return HeroesService.instance;
  }

  public getNewHero(name: string): Hero {
    return new Hero({name: name});
  }
}
