import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVistoComponent } from 'src/app/body/lista-vistos/lista-vistos.component';

const routes: Routes = [
{
  path: '',
  component: ListaVistoComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ListaVistoRoutingModule { }
