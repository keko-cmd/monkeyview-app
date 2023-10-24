import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { ResenhasFormComponent } from '../resenhas-form/resenhas-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';




@Component({
  selector: 'app-resenhas-card',
  templateUrl: './resenhas-card.component.html',
  styleUrls: ['./resenhas-card.component.css']
})
export class ResenhasCardComponent implements OnInit{

  constructor(public movieApi: MovieAPIService, private route: Router, public dialog: MatDialog){
     
  }


  ngOnInit() {
    
  }

  openDiag(id: number){
    this.dialog.open(ResenhasFormComponent, {
      data: { _id: id },
      height: '400px',
      width: '600px',
    });
    this.route.navigate(['inicio/hacer-reseñas/formulario/', id] );
  }

//Borra la pelicula del arreglo
  deleteMovie(id: number) {
    for (let movie of this.movieApi.dtoAccess.getSelectedMovie()) {
      if (movie.id === id) {
        let index = this.movieApi.dtoAccess.getSelectedMovie().indexOf(movie);
        this.movieApi.dtoAccess.getSelectedMovie().splice(index, 1);
      }
    }
  }

}


