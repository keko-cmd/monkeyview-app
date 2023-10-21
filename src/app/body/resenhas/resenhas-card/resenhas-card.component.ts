import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-resenhas-card',
  templateUrl: './resenhas-card.component.html',
  styleUrls: ['./resenhas-card.component.css']
})
export class ResenhasCardComponent implements OnInit{

  constructor(public movieApiService: MovieAPIService){
    
  }
  ngOnInit() {
    console.log(this.movieApiService.movieSelectedlist)
  }

  // movieSelectedlist: movieApiService.

  deleteMovie(id: number) {
    for (let movie of this.movieApiService.movieSelectedlist) {
      if (movie.id === id) {
        let index = this.movieApiService.movieSelectedlist.indexOf(movie);
        this.movieApiService.movieSelectedlist.splice(index, 1);
      }
    }
  }

}


