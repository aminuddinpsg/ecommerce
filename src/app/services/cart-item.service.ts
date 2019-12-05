import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { Observable, BehaviorSubject } from 'rxjs';

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

  public getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>("http://localhost:3000/shoppingcart");

  }

  public update(cartItem: CartItem): Observable<CartItem> {
    return this.http.put<CartItem>("http://localhost:3000/shoppingcart/" + cartItem.id, cartItem);

  }

  public delete(id: number): Observable<CartItem> {
    return this.http.delete<CartItem>("http://localhost:3000/shoppingcart/" + id);

  }

  // public updateCount(){
  //   this.getCartItems().subscribe((cartItems: CartItem[]) =>{
  //     this.cartSource.next(cartItems.length);

  //   })
  // }

}

    // this.getCartItems().subscribe((cartItems: CartItem[]) => {
    //   this.cartSource = new BehaviorSubject<number>(cartItems.length);
    //   this.cartCount = this.cartSource.asObservable();
    //  })