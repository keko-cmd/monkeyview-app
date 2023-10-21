import { Injectable } from '@angular/core';
import { ResenhasModel } from '../interface/resenhas-model';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { enviorment } from 'src/enviorment';


@Injectable({
  providedIn: 'root'
})


export class MovieRegisterService {
  // baseURL = enviorment.API_KEY; private http: HttpClient
  constructor() {   
  }
  
  movieArray: ResenhasModel[] = [];

  addMovie(movie: ResenhasModel){
    //Appends the object to the service obj array
    this.movieArray.push(movie);  
   };

  //  crearPelicula(movieReviewed :ResenhasModel): Observable<ResenhasModel>{
  //   return this.http.post<ResenhasModel>(this.baseURL + '/', movieReviewed)
  //  };

   

}
