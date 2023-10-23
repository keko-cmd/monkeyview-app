import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhasCardComponent } from 'src/app/body/resenhas/resenhas-card/resenhas-card.component';
import { CardScrollComponent } from 'src/app/body/resenhas/resenhas-card/card-scroll/card-scroll.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ResenhasRoutingModule } from './resenhas-routing.module';



@NgModule({
  declarations: [
    ResenhasCardComponent,
    CardScrollComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ResenhasRoutingModule,
    RouterModule
  ],
  exports: [ResenhasCardComponent,
   CardScrollComponent]
})
export class ResenhasCardModule { }
