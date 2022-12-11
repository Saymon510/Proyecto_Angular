import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productHttpService : ProductHttpService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    //this.deleteProducts();
  }
  getProducts(){
    this.productHttpService.getAll().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getProduct(){
    this.productHttpService.getOne(1).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  createProduct(){
    const data ={
      id:5,
      title:"Lapiz",
      price:1,
      description:"Utiles Escoles Saymon Mina",
      categoryId:1,
      images:["none"],
    }
    this.productHttpService.store().subscribe(
      response => {
        console.log(response);
      }
    )
  }
  updateProduct(){
    const data={
      title:"cuaderno",
      price:20,
      description:"Utiles Escolares - Saymon Mina"
    }
    this.productHttpService.update(1).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  deleteProducts(){
    this.productHttpService.destroy(1).subscribe(
      response =>{
        console.log(response);
      }
    )
  }


}
