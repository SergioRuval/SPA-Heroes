import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  nombre: string = 'Sergio Ruvalcaba Lozano';
  nombreAlterno: string = 'sErGiO rUvAlCaBa lOzAnO';
  videoURL: string = "https://www.youtube.com/embed/TUu41Havas0";
  arrayPrueba = ['A','B','C','D','E','F','G','H','I','J','K'];
  pi = Math.PI;
  fecha = new Date();
  precio = 199.99;

  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
