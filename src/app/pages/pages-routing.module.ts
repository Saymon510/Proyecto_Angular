import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from'@angular/router',
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //rutas protegidas
  {
  path: 'dashboard/',
  component: PagesComponent,
  children: [
  { path: '', component: DashboardComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'grafica1', component: Grafica1Component },
  ]
  },
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PagesRoutingModule { }
