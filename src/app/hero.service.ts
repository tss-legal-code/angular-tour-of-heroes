import { Injectable } from '@angular/core';

import {Hero} from "./hero"
import {HEROES} from "./mock-heroes"
// import {Observable, of} from "rxjs"


import { MessagesService } from './messages.service';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  // // says deprecated symbol used, whatever that means...
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  getHeroes(){
    this.messagesService.add("HeroService: Heroes are downloaded")
      return HEROES
  }


  // getHero(id: number): Observable<Hero> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const hero = HEROES.find(h => h.id === id)!;
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(hero);
  //
  getHero(id: number) {
    const hero = HEROES.find(suspect => suspect.id === id);
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }

}
