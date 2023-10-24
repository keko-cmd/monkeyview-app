import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhasCardComponent } from 'src/app/body/resenhas/resenhas-card/resenhas-card.component';
import { CardScrollComponent } from 'src/app/body/resenhas/resenhas-card/card-scroll/card-scroll.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app.routing.module';



@NgModule({
  declarations: [
    ResenhasCardComponent,
    CardScrollComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  AppRoutingModule,
    RouterModule
  ],
  exports: [ResenhasCardComponent,
   CardScrollComponent]
})
export class ResenhasCardModule { }
