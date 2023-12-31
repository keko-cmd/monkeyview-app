import { Injectable } from '@angular/core';
import { enviorment } from 'src/enviorment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MovieModelAPI, PagesApi } from '../interface/movie-model-api';
import { DTO } from '../DTO/DTO-model';


@Injectable({
  providedIn: 'root'
})




export class MovieAPIService {

  //Array that saves Data
  dtoAccess: DTO = new DTO();

  constructor(private http: HttpClient) {
  }

  baseURL: string = enviorment.API_LINK;


  //Get para las peliculas al ALI
  getMoviesApi(): Observable<PagesApi>{
    const head = new HttpHeaders({
      accept: 'application/json',
      Authorization: enviorment.API_TOKEN,
    })

    return this.http.get<PagesApi>(this.baseURL,{headers : head});
  }


 

}
