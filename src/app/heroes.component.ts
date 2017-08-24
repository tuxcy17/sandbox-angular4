import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core';
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-heroes',
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
          (click)="onSelect(hero)" 
          [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./heroes.component.css'],
  providers: []
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
