import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResenhasFormModule } from './modules/resenhas/resenhas-form.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    PeliculasModule,
    BrowserAnimationsModule,
    ResenhasFormModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
