import { NgModule } from '@angular/core';
import { AboutUsComponent } from 'src/app/body/aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutUsRoutingModule { }
