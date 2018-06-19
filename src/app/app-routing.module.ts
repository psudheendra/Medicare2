import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CmsComponent } from './cms/cms.component';

const routes: Routes = [
  { path: 'tbd', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cms', component: CmsComponent }
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

