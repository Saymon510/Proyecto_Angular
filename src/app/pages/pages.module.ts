import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';



@NgModule({
  declarations: [
    ProductComponent,
    CatalogueComponent,
    DashboardComponent,
    NopagesfoundComponent,
  ],
  exports: [
    ProductComponent,
    CatalogueComponent,
    DashboardComponent,
    NopagesfoundComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
