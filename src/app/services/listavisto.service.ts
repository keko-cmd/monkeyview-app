import { Injectable } from '@angular/core';
import { ResenhasModel } from '../interface/resenhas-model';

@Injectable({
  providedIn: 'root'
})

export class ListadoVistoService {
  constructor() {   
  }
  movieArray: ResenhasModel[] = [];


  addMovie(movie: ResenhasModel){
    //Appends the object to the service obj array
    this.movieArray.push(movie);  
   };

}
