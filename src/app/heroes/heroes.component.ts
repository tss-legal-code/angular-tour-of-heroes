import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {FormsModule} from "@angular/forms"
import {HEROES} from "../mock-heroes"
import {HeroService} from "../hero.service"
import {MessagesService} from "../messages.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];

  constructor(private heroService: HeroService,private messagesService: MessagesService) {
  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero? : Hero;

  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messagesService.add(`HeroComponent: selected hero id=${hero.id}`)
  }



}
