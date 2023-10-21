import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasCardsComponent } from 'src/app/body/peliculas/peliculas-cards.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PeliculasCardsComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],exports: [PeliculasCardsComponent]
})
export class PeliculasModule { }
