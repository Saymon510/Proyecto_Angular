import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
const data ={

}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

  }

  getProducts(){
    this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  getProductId(){
    this.httpClient.get("https://api.escuelajs.co/api/v1/product/21").subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  createProduct(){
    const data={
      title:"Libro",
      price: 21,
      description:"Utiles Escolares - Saymon Mina"
    }
    const url= "https://api.escuelajs.co/api/v1/product/21";
    this.httpClient.get("https://api.escuelajs.co/api/v1/product/21").subscribe(
      response=>{
        console.log(response);
      }
    )
  }

  updateProduct(){
    const data={
      title:"Cuaderno",
      price: 15,
      description:"Utiles Escolares - Saymon Mina"
    }
    const url= "https://api.escuelajs.co/api/v1/product/21";
    this.httpClient.put(url, data).subscribe(
      response=>{
        console.log(response);
      }
    )
  }

  deleteProducts(){
    const url= "https://api.escuelajs.co/api/v1/product/21";
    this.httpClient.delete("https://api.escuelajs.co/api/v1/products").subscribe(
      response =>{
        console.log(response)
      }
    )
  }

}
