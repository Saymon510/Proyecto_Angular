import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/models/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products:ProductModel[] = [];
   selectedProduct:UpdateProductDto = {};

  constructor(private productHttpService:ProductHttpService) {

  }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts(){
    this.productHttpService.getAll().subscribe(
      response =>{
        this.products = response;
        console.log(response);
      }
    )
  }

  getProduct(id: ProductModel['id']){
    const url = "https://api.escuelajs.co/api/v1/products/8";
    return this.productHttpService.getOne(2).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  createProduct(){
    const data = {
      title: 'esfero',
      price: 45,
      description: 'utiles escolares',
      categoryId: 1,
      images: ["https://api.lorem.space/image/watch?w=640&h=480&r=5922", "https://api.lorem.space/image/watch?w=640&h=480&r=3622"],
    }
    this.productHttpService.store(data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  editProduct(product: ProductModel){
    this.selectedProduct = product;
  }

  updateProduct(id: ProductModel['id']){
    const data = {
      title: 'zapatos',
      price: 60,
      description: 'calzado',
    }
    this.productHttpService.update(1, data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  deleteProduct(id: ProductModel['id']){
    this.productHttpService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(product => product.id != id);
        console.log(response);
      }
    )
  }
}
