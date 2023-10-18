import { Injectable } from '@angular/core';
import { ResenhasModel } from '../models/resenhas-model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  movieArray: ResenhasModel[] = [];


  addMovie(movie: ResenhasModel){
    //Appends the object to the service obj array
    this.movieArray.push(movie);  
   };

  deleteMovie(id: number) {
    for (let movie of this.movieArray) {
      if (movie._id === id) {
        let index = this.movieArray.indexOf(movie);
        this.movieArray.splice(index, 1);
      }
    }

  }



  constructor() { }
}
