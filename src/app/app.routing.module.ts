import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasCardsComponent } from './body/peliculas/peliculas-cards.component';
import { PeliculasModule } from './modules/peliculas/peliculas.module';




const routes: Routes = [
  {
    path: 'inicio',
    children: [
      { path: '', component: PeliculasCardsComponent },
      {
        path: 'hacer-reseñas',
        loadChildren: () => import('./modules/resenhas/resenhas-body.module').then(m => m.ResenhasBodyModule)
      },
      {
        path: 'pendientes-ver',
        loadChildren: () => import('./modules/watchlist/watchlist.module').then(m => m.WatchlistModule) 
      },
      {
      path: 'sobre-nosotros',
        loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => m.AboutusModule) 
      },


    ]
  },
  {  path: '**', redirectTo: 'inicio' },
];

@NgModule({

  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }