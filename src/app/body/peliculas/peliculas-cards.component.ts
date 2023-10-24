import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DTO } from 'src/app/DTO/DTO-model';
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


  ngOnInit(): void {
    
    this.listMovies();

   
  }


listMovies(){

  this.movieApi.getMoviesApi().pipe(
    map((res) => res.results), // extract data attribut
    map((data) => {
      return data.map((aProd) => {   //map the main object to its subobject 
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
      this.movieApi.dtoAccess.setMovieList(movie)
      // console.log(this.moviesArray)
    }); 

}

  addWatchlist(id: number) {
  
    for (let movie of this.movieApi.dtoAccess.getMoviesList()) {

      if (movie.id === id) {
     
        this.movieApi.dtoAccess.pushSelectedMovie(movie);
        console.log(this.movieApi.dtoAccess.getSelectedMovie());
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
  }


}
