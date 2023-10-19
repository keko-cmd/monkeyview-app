import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistCardsComponent } from 'src/app/body/watchlist/watchlist-cards.component';
import { WatchlistRoutingModule } from './watchlist-routing.module';



@NgModule({
  declarations: [
    WatchlistCardsComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule
  ]
})
export class WatchlistModule { }
