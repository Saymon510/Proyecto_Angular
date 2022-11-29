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
    path: '',
    component: PagesComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent },
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
