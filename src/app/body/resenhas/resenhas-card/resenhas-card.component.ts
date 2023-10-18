import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-resenhas-card',
  templateUrl: './resenhas-card.component.html',
  styleUrls: ['./resenhas-card.component.css']
})
export class ResenhasCardComponent {

  constructor(public movieService : PeliculasService){}

}
