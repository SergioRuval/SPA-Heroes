import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  // Recibir la información de un componente Padre
  @Input() hero:any = {};
  @Input() index:number;

  // Mandar información del hijo al padre
  @Output() selectedHero: EventEmitter<number>;

  constructor(private _router: Router) {
    this.selectedHero = new EventEmitter();
    
  }

  ngOnInit(): void {
  }

  navegar(){
    this._router.navigate(['/hero', this.index]);
  }

}
