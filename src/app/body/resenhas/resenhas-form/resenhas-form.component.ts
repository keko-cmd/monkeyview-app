import { Component, OnInit } from '@angular/core';
import { ResenhasModel } from 'src/app/models/resenhas-model';
import { MovieRegisterService } from 'src/app/services/movieRegister.service';

@Component({
  selector: 'app-resenhas-form',
  templateUrl: './resenhas-form.component.html',
  styleUrls: ['./resenhas-form.component.css']
})

export class ResenhasFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  rating: number[] = [1, 2, 3 ,4, 5];
  ratingSelected: number = 0;
  comments: string = '';
  
//Constructor calls the service 
constructor(public peliculasService : MovieRegisterService){}



appendModel(e: any){
  
  e.preventDefault();

  //Pushes form values to service as a Model
  this.peliculasService.addMovie(new ResenhasModel(this.name.valueOf(), this.email.valueOf(), this.ratingSelected.valueOf(), this.comments.valueOf()));
  
  //Clear form values
  this.name = '';
  this.email = '';
  this.ratingSelected = 0;
  this.comments = '';
}

ngOnInit() {

}
}


