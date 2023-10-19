import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhasBodyComponent } from 'src/app/body/resenhas/resenhas-body/resenhas-body.component';
import { ResenhasModule } from './resenhas.module';



@NgModule({
  declarations: [
    ResenhasBodyComponent,
  ],
  imports: [
    CommonModule,
    ResenhasModule,
  ]
})
export class ResenhasBodyModule { }
