import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasCardsComponent } from './body/peliculas/peliculas-cards.component';
import { ResenhasFormComponent } from './body/resenhas/resenhas-form/resenhas-form.component';
import { ResenhasCardComponent } from './body/resenhas/resenhas-card/resenhas-card.component';
import { ResenhasRoutingModule } from './modules/resenhas/resenhas-routing.module';
import { CardScrollComponent } from './body/resenhas/resenhas-card/card-scroll/card-scroll.component';




const routes: Routes = [
  {
    path: 'inicio',
    children: [
      { path: '', component: PeliculasCardsComponent },
      {
        path: 'hacer-reseñas', component: CardScrollComponent,
        //loadChildren: () => import('./modules/resenhas/resenhas-card.module').then(m => m.ResenhasCardModule)
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
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({


  imports: [RouterModule.forRoot(routes), ResenhasRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }