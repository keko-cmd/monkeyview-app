import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardScrollComponent } from 'src/app/body/resenhas/resenhas-card/card-scroll/card-scroll.component';
import { ResenhasFormComponent } from 'src/app/body/resenhas/resenhas-form/resenhas-form.component';

const routes: Routes = [
{
    path: '', component: CardScrollComponent,
    children:[
      {
       path : 'formulario/:id',
       component: ResenhasFormComponent
      },
    ]
}
];

@NgModule({
imports: [RouterModule.forChild(routes), ],
exports: [RouterModule]
})
export class ResenhasRoutingModule { }
