import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css'],
})
export class BusquedaHeroeComponent implements OnInit {
  heroes: Heroes[] = [];
  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
