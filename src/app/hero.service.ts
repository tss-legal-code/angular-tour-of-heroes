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

}
