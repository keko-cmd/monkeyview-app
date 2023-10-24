import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenhasFormComponent } from 'src/app/body/resenhas/resenhas-form/resenhas-form.component';
import { FormsModule} from '@angular/forms';
import { ResenhasCardModule } from './resenhas-card.module';





@NgModule({
  declarations: [
    ResenhasFormComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ResenhasCardModule,

  ]
})
export class ResenhasFormModule { }
