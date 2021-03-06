import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/Hero.services';
import { Router } from '@angular/router';

// Decorador
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  arrayHeroes:object[] = [];

  constructor(private _heroService: HeroService, private _router: Router) {
    
  }

  // Se ejcuta en cuanto se termina de rederizar el componente
  ngOnInit(): void {
    // console.log(this._heroService.getHeroes());
    this._heroService.getHeroes().subscribe( (data: any) => {
      this.arrayHeroes = data;
    });
  }

  navegar(index) {
    this._router.navigate(['/hero', index]);
  }
}
