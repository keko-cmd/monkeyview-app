import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistCardsComponent } from 'src/app/body/watchlist/watchlist-cards.component';

const routes: Routes = [
{
  path: '',
  component: WatchlistCardsComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class WatchlistRoutingModule { }
