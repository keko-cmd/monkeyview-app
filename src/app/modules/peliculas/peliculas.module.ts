import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasCardsComponent } from 'src/app/body/peliculas/peliculas-cards.component';



@NgModule({
  declarations: [
    PeliculasCardsComponent
  ],
  imports: [
    CommonModule
  ],exports: [PeliculasCardsComponent]
})
export class PeliculasModule { }
