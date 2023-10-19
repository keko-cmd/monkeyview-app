import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResenhasBodyComponent } from 'src/app/body/resenhas/resenhas-body/resenhas-body.component';



const routes: Routes = [
  {
    path: '',
    component: ResenhasBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ResenhasRoutingModule { }
