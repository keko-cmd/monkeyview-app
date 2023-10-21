import { Component, OnInit } from '@angular/core';
import { ResenhasModel } from 'src/app/interface/resenhas-model';
import { ListadoVistoService } from 'src/app/services/listavisto.service';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-resenhas-form',
  templateUrl: './resenhas-form.component.html',
  styleUrls: ['./resenhas-form.component.css']
})

export class ResenhasFormComponent implements OnInit {

  
//Constructor calls the service 
constructor(public apiService: MovieAPIService, public listaVisto: ListadoVistoService){}

ngOnInit() {
}

ratingArray: number[] = [1, 2, 3, 5,5]

model: ResenhasModel = {
  comentarios: '',
  email: '',
  rating: 0,
  backdrop_path: '',
  id: 0,
  title: '',
  original_title: '',
  overview: '',
  poster_path: '',
  popularity: 0,
  release_date: ''
}

onSubmit(){
  // this.apiService.crearPelicula(this.model).subscribe(
  //   (response:ResenhasModel) => console.log(response)
  // );
        console.log(this.model)
}

}