import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../services/cart-item.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private cartItemService: CartItemService;
  public shoppingCart: CartItem[];


  constructor(cartItemService: CartItemService) {
    this.cartItemService = cartItemService;
  }

  ngOnInit() {
    this.cartItemService.getCartItems().subscribe((cartItem: CartItem[]) => {
      this.shoppingCart = cartItem;
    });
  }

}
