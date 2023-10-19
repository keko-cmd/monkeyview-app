import { Component, OnInit } from '@angular/core';
import { MovieRegisterService } from 'src/app/services/movieRegister.service';

@Component({
  selector: 'app-resenhas-card',
  templateUrl: './resenhas-card.component.html',
  styleUrls: ['./resenhas-card.component.css']
})
export class ResenhasCardComponent implements OnInit{

  constructor(public movieService : MovieRegisterService){
    
  }
  ngOnInit() {
  }

}


