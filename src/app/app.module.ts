import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { PeliculasBodyComponent } from './body/peliculas/peliculas-body/peliculas-body.component';
import { PeliculasCardsComponent } from './body/peliculas/peliculas-cards/peliculas-cards.component';
import { WishlistBodyComponent } from './body/wishlist/wishlist-body/wishlist-body.component';
import { WishlistCardsComponent } from './body/wishlist/wishlist-cards/wishlist-cards.component';
import { WishlistModalComponent } from './body/wishlist/wishlist-modal/wishlist-modal.component';
import { ResenhasBodyComponent } from './body/resenhas/resenhas-body/resenhas-body.component';
import { ResenhasCardComponent } from './body/resenhas/resenhas-card/resenhas-card.component';
import { ResenhasModalComponent } from './body/resenhas/resenhas-modal/resenhas-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    PeliculasBodyComponent,
    PeliculasCardsComponent,
    WishlistBodyComponent,
    WishlistCardsComponent,
    WishlistModalComponent,
    ResenhasBodyComponent,
    ResenhasCardComponent,
    ResenhasModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
