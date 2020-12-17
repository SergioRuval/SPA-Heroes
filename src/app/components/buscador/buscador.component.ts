import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  resultados :any = [];
  strBusqueda: string = '';

  constructor(private _activatedRoute: ActivatedRoute, private _heroService: HeroService) { }

  // Cuando se termina de renderizar el componente
  ngOnInit(): void {
    // Obtener parámetros de la ruta relativa
    this._activatedRoute.params.subscribe( params => {
      this.strBusqueda = params['termino'];
      this._heroService.getNombre(params['termino']).subscribe( data => {
        this.resultados = data;
      });
      console.log(this.resultados);
    });
    console.log(this.resultados);
    
  }
}
