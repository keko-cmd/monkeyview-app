import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { PeliculasBodyComponent } from '../body/peliculas/peliculas-body/peliculas-body.component';
import { PeliculasCardsComponent } from '../body/peliculas/peliculas-cards/peliculas-cards.component';
import { WishlistBodyComponent } from '../body/wishlist/wishlist-body/wishlist-body.component';
import { WishlistCardsComponent } from '../body/wishlist/wishlist-cards/wishlist-cards.component';
import { WishlistModalComponent } from '../body/wishlist/wishlist-modal/wishlist-modal.component';
import { ResenhasBodyComponent } from '../body/resenhas/resenhas-body/resenhas-body.component';
import { ResenhasCardComponent } from '../body/resenhas/resenhas-card/resenhas-card.component';
import { ResenhasModalComponent } from '../body/resenhas/resenhas-modal/resenhas-modal.component';
import { SobreNosotrosComponent } from '../body/sobre-nosotros/sobre-nosotros.component';
import { ResenhasFormComponent } from './resenhas/resenhas-form/resenhas-form.component';
import { FormsModule} from '@angular/forms';
import { CardScrollComponent } from './resenhas/resenhas-card/card-scroll/card-scroll.component';




@NgModule({
  declarations: [
    BodyComponent,
    PeliculasBodyComponent,
    PeliculasCardsComponent,
    WishlistBodyComponent,
    WishlistCardsComponent,
    WishlistModalComponent,
    ResenhasBodyComponent,
    ResenhasCardComponent,
    ResenhasModalComponent,
    SobreNosotrosComponent,
    ResenhasFormComponent,
    CardScrollComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    BodyComponent,
  ]
})
export class BodyModule {
  
 }
