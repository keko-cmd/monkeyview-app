import { Injectable } from '@angular/core';
import { MovieModelAPI } from '../interface/movie-model-api';
import { enviorment } from 'src/enviorment';

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
      Authorization: enviorment.API_KEY,
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
