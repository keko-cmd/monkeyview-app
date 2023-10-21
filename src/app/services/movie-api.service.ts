import { Injectable } from '@angular/core';
import { enviorment } from 'src/enviorment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MovieModelAPI, PagesApi } from '../interface/movie-model-api';


@Injectable({
  providedIn: 'root'
})




export class MovieAPIService {

  constructor(private http: HttpClient) {
  }

  baseURL: string = enviorment.API_LINK;

  //Peliculas guardadas cambiar despues a POST method
  movieSelectedlist: MovieModelAPI[]=[];

  //Get para las peliculas al ALI
  getMoviesApi(): Observable<PagesApi>{
    const head = new HttpHeaders({
      accept: 'application/json',
      Authorization: enviorment.API_TOKEN,
    })

    return this.http.get<PagesApi>(this.baseURL,{headers : head});
  }


 

}
