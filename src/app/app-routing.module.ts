import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'tbd', component: AppComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule ,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

