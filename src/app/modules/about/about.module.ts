import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:AboutusComponent}
];

@NgModule({
  declarations: [ AboutusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
