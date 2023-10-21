import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasCardsComponent } from './body/peliculas/peliculas-cards.component';




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
        path: 'vistos',
        loadChildren: () => import('./modules/lista-vistos/listavistos.module').then(m => m.ListaVistoModule) 
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