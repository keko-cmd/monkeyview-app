import { Injectable } from '@angular/core';
import { MovieModelAPI } from '../interface/movie-model-api';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {

  constructor() {
    this.getMoviesApi();
   }

  options: any ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTZjNDljZjMzYjA0OWNjNDhlMDY1MzYwNDJhMWJjZCIsInN1YiI6IjY1MWIwMjRiOWQ1OTJjMDBjOGMzZjJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wc80xTQQ1V3kjbCao7HSgwk_pbtjUfblBWrYaRK_fxM'
    }
  };

  movies: MovieModelAPI[] = [];
 
  
  getMoviesApi(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', this.options)
    .then(res => res.json())
    .then(data => this.movies = data.results)

    setTimeout(() => {
      console.log(this.movies)
    }, 2000);
  } ;

  //Para Agregarlo al Watchlist
  getIDMovie(id: number) : number {
    console.log(id);
    return id;
    }

}
