import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes : Hero[] = [

      { id: 11, name: 'Lorem' },
      { id: 12, name: 'Ipsum' },
      { id: 13, name: 'Dolor' },
      { id: 14, name: 'Sit' },
      { id: 15, name: 'Amet' },
      { id: 16, name: 'Consectetur' },
      { id: 17, name: 'Adipisicing' },
      { id: 18, name: 'Elit' },
      { id: 19, name: 'Doloribus' },
      { id: 20, name: 'Vel' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
