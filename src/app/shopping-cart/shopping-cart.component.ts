import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../services/cart-item.service';
import { CartItem } from '../models/cart-item';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private cartItemService: CartItemService;
  private sharedService:SharedService;
  public shoppingCart: CartItem[];
  public message:string;

  constructor(cartItemService: CartItemService,sharedService:SharedService) {
    this.cartItemService = cartItemService;
    this.sharedService = sharedService;
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.cartItemService.getCartItems().subscribe((cartItem: CartItem[]) => {
      this.shoppingCart = cartItem;
      this.sharedService.updateCount(this.shoppingCart.length);
    });
  }

  update(cartItem: CartItem, requiredQuantity: number) {
    cartItem.requiredQuantity = requiredQuantity;
    this.cartItemService.update(cartItem).subscribe(() => {
      this.list();
      this.message = "Successfully updated";
    })
  }

  delete(id: number) {
    this.cartItemService.delete(id).subscribe(() => {
      this.list();
      this.message = "Successfully deleted";
    })
  }

}
