import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { ProductService } from '../services/product.service';
import { CartItemService } from '../services/cart-item.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];
  public message: string;
  public colspan: number;
  public galleryView: boolean;
  public searchKeyword: string;
  public searchResults: Product[];
  public shoppingCart: CartItem[];

  private productService: ProductService;
  private cartItemService: CartItemService;
  private sharedService: SharedService;

  constructor(productService: ProductService, cartItemService: CartItemService, sharedService: SharedService) {
    this.colspan = 2;
    this.galleryView = true;
    this.productService = productService;
    this.cartItemService = cartItemService;
    this.sharedService = sharedService;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  addToCart(event: CartItem) {
    let product: Product = event.product;
    let requiredQuantity: number = event.requiredQuantity;
    //let cartItem = new CartItem(0, product, requiredQuantity);
    this.cartItemService.save(new CartItem(0, product, requiredQuantity)).subscribe((cartItem: CartItem) => {
      this.cartItemService.getCartItems().subscribe((cartItems: CartItem[]) => {
        this.sharedService.updateCount(cartItems.length);
        this.message = "Product " + product.name + " successfully added. Required quantity: " + requiredQuantity;
      })
    })
  }

  changeView() {
    this.galleryView = !this.galleryView;
  }

  search(event: any) {
    this.searchKeyword = event.target.value;
    if (this.searchKeyword != "") {
      let pattern = new RegExp('^' + this.searchKeyword, 'i');
      this.searchResults = this.products.filter((product: any) => {
        return pattern.test(product.name);
      })
    } else {
      this.searchResults = [];
    }
  }
}
