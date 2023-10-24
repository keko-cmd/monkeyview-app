
import { Component, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MovieModelAPI } from 'src/app/interface/movie-model-api';
import { ResenhasModel } from 'src/app/interface/resenhas-model';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-resenhas-form',
  templateUrl: './resenhas-form.component.html',
  styleUrls: ['./resenhas-form.component.css']
})




export class ResenhasFormComponent{
  //routeQueryParams$: Subscription;
 



  movieForm: ResenhasModel = {
    id: this.data._id,
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

  
      ratingArray: number[] = [1, 2, 3, 4, 5]
 
  

  //Constructor calls the service 
  constructor(public apiService: MovieAPIService,public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {_id: number}) {
  }

 
  onSubmit(movie : MovieModelAPI){
    for(let movie of this.apiService.dtoAccess.getSelectedMovie()){

    //mapea los valores existentes DTO dependiendo del ID de la peli (Esto se va a cambiar cuando implemente DB)
    if(this.data._id === movie.id){
      this.movieForm.backdrop_path = movie.backdrop_path,
      this.movieForm.original_title = movie.original_title,
      this.movieForm.overview = movie.overview,
      this.movieForm.poster_path = movie.poster_path,
      this.movieForm.popularity = movie.popularity
    }

    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Su resena fue agregada',
      showConfirmButton: false,
      backdrop: false,
      timer: 1200
    })
  }
   
  this.apiService.dtoAccess.pushResenhaMovie(this.movieForm);
  this.dialog.closeAll();
  console.log(this.apiService.dtoAccess.getResenhasList());
  this.dialog.ngOnDestroy;
  }

 

}


