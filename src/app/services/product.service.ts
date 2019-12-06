import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public http:HttpClient;

  constructor() {
   }

/*    constructor(http:HttpClient) {
    this.http;
   }  */
   

  getProducts(): Observable<Product[]> {
    // convert to Observable
    return of([
      { name: "Television" },
      { name: "Radio" }
    ]);

  }

 getProductsHttp(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products/');  
  }

}
