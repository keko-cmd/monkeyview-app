import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MovieModelAPI, PagesApi } from 'src/app/interface/movie-model-api';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-peliculas-cards',
  templateUrl: './peliculas-cards.component.html',
  styleUrls: ['./peliculas-cards.component.css']
})



export class PeliculasCardsComponent implements OnInit {

  constructor(public movieApi: MovieAPIService) {

  }

  moviesArray: MovieModelAPI[] = [];

  ngOnInit(): void {
    
    this.listMovies();

   
  }

listMovies(){

  this.movieApi.getMoviesApi().pipe(
    map((res) => res.results), // extract data attribut
    map((data) => {
      return data.map((aProd) => {   //map the product and take only id, name, price
        return {
          backdrop_path: aProd.backdrop_path,
          id: aProd.id,
          title: aProd.title,
          original_title: aProd.original_title,
          overview: aProd.overview,
          poster_path: aProd.poster_path,
          popularity: aProd.popularity,
          release_date: aProd.release_date,
        };
      });
    })).subscribe((movie) => {
      this.moviesArray = movie
      // console.log(this.moviesArray)
    }); 

}

  addWatchlist(id: number) {

    for (let movie of this.moviesArray) {

      if (movie.id === id) {
        this.movieApi.movieSelectedlist.push(movie);
      }
    }
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Su Pelicula fue agregada',
      showConfirmButton: false,
      backdrop: false,
      timer: 1200
    })

    console.log(this.movieApi.movieSelectedlist);
  }


}
