import {IHeroModel, HeroModel} from '../models/hero';

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

  public getNewHero(name: string): IHeroModel {
    return new HeroModel({name: name});
  }
}
