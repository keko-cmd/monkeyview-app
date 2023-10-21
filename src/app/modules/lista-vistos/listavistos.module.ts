import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVistoComponent } from 'src/app/body/lista-vistos/lista-vistos.component';
import { ListaVistoRoutingModule } from './listavistos-routing.module';



@NgModule({
  declarations: [
    ListaVistoComponent
  ],
  imports: [
    CommonModule,
    ListaVistoRoutingModule
  ]
})
export class ListaVistoModule { }
