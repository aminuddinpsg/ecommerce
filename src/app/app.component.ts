import { Component} from '@angular/core';
import { CartItemService } from './services/cart-item.service';
import { SharedService } from './services/shared.service';
import { CartItem } from './models/cart-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  private cartItemService:CartItemService;
  private sharedService:SharedService;

  constructor(cartItemService:CartItemService,sharedService:SharedService){
    this.cartItemService = cartItemService;
    this.sharedService = sharedService;
  }

  ngOnInit(){
      this.cartItemService.getCartItems().subscribe((cartItems:CartItem[]) => {
        this.sharedService.updateCount(cartItems.length);
      })
  }

}
