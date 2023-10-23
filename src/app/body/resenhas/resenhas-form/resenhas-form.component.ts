import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { ResenhasModel } from 'src/app/interface/resenhas-model';
import { MovieAPIService } from 'src/app/services/movie-api.service';



@Component({
  selector: 'app-resenhas-form',
  templateUrl: './resenhas-form.component.html',
  styleUrls: ['./resenhas-form.component.css']
})



export class ResenhasFormComponent implements OnInit{
  //routeQueryParams$: Subscription;
  ratingArray: number[] = [1, 2, 3, 4, 5]

 

  movieForm: ResenhasModel = {
    id: 0,
    backdrop_path: '',
    original_title: '',
    overview: '',
    poster_path: '',
    popularity: 0,

    title: '',
    email: '',
    rating: 0,
    comentarios: '',
    release_date: ''
  }

  //Constructor calls the service 
  constructor(public apiService: MovieAPIService) {
  }

  ngOnInit(): void {
    
  }

  
  // ngOnDestroy() {
  //   this.routeQueryParams$.unsubscribe()
  // }

  onSubmit(){
    console.log('meow')
  }

 

}


