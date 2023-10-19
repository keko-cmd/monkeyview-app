import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from 'src/app/body/aboutus/aboutus.component';
import { AboutUsRoutingModule } from './aboutus-routing.module';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutusModule { }
