import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-peliculas-cards',
  templateUrl: './peliculas-cards.component.html',
  styleUrls: ['./peliculas-cards.component.css']
})
export class PeliculasCardsComponent implements OnInit{

    constructor(public movieApi : MovieAPIService){
    }
    ngOnInit(){}
}
