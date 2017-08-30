import { Schema, Document, model } from 'mongoose';
import {IHero} from '../../shared-src/hero.interface';

interface IHeroModel extends IHero, Document {}

const HeroSchema: Schema = new Schema({
  id: { type : String },
  name: { type : String}
});

const HeroModel = model<IHeroModel>('Hero', HeroSchema);

export {IHeroModel, HeroModel};
