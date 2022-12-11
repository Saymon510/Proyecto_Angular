import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteProduct, ProductModule, UpdateProduct } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";
  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get(this.API_URL)
  }

  getOne(id:number){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url)
  }

  store(){
    const data ={
      id:5,
      title:"Lapiz",
      price:1,
      description:"Utiles Escoles Saymon Mina",
      categoryId:1,
      images:["none"],
    }
    const url = `${this.API_URL}`;
    return this.httpClient.post(url,data)
  }

  update(id:number, product:UpdateProduct){
    const data={
      title:"cuaderno",
      price:20,
      description:"Utiles Escolares - Saymon Mina"
    }
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url, data)
  }

  destroy(id:number, product:DeleteProduct){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete(url)
  }
}
