import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ResenhasCardComponent } from 'src/app/body/resenhas/resenhas-card/resenhas-card.component';
import { ResenhasModalComponent } from 'src/app/body/resenhas/resenhas-modal/resenhas-modal.component';
import { ResenhasFormComponent } from 'src/app/body/resenhas/resenhas-form/resenhas-form.component';
import { CardScrollComponent } from 'src/app/body/resenhas/resenhas-card/card-scroll/card-scroll.component';
import { ResenhasRoutingModule } from './resenhas-routing.module';

@NgModule({
 declarations: [
  ResenhasFormComponent,
  ResenhasCardComponent,
  CardScrollComponent,
  ResenhasModalComponent,

  ],
  imports: [
    CommonModule, 
    FormsModule,
  ],
  exports:[ 
    ResenhasFormComponent,
    ResenhasCardComponent,
    CardScrollComponent,
    ResenhasModalComponent, 
    ResenhasRoutingModule],
})

export class ResenhasModule { }
