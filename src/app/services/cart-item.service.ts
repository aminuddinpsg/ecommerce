import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public save(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>("http://localhost:3000/shoppingcart", cartItem);

  }

  public getCartItems():Observable<CartItem[]> {
    return this.http.get<CartItem[]>("http://localhost:3000/shoppingcart");

  }

}
