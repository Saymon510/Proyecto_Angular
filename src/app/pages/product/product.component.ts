import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    //this.deleteProducts();
  }
  getProducts(){
    this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getProduct(){
    this.httpClient.get("https://api.escuelajs.co/api/v1/products/21").subscribe(
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
    const url = "https://api.escuelajs.co/api/v1/products"
    this.httpClient.post(url,data).subscribe(
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
    const url = "https://api.escuelajs.co/api/v1/products/21";
    this.httpClient.put(url, data).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  deleteProducts(){
    const url = "https://api.escuelajs.co/api/v1/products/21";
    this.httpClient.delete(url).subscribe(
      response =>{
        console.log(response);
      }
    )
  }


}
