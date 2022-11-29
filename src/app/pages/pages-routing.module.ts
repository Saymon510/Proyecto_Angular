import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from'@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  //rutas protegidas
  {
    path: 'dashboard/',
    component: PagesComponent,
    children: [
    { path: '', component: DashboardComponent },
    //{ path: 'progress', component: ProgressComponent },
    //{ path: 'grafica1', component: Grafica1Component },
    { path: 'product', component: ProductComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]
    },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class PagesRoutingModule { }
