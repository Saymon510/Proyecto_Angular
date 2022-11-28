import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';



@NgModule({
  declarations: [
    ProductComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
