import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartItemService } from '../services/cart-item.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private route: ActivatedRoute;
  private productService: ProductService;
  public product: Product;
  public cartItemService: CartItemService;
  public message: string;
  public cartItem: CartItem;

  constructor(route: ActivatedRoute, productService: ProductService,cartItemService: CartItemService) {
    this.route = route;
    this.productService = productService;
    this.cartItemService = cartItemService;
    this.route.params.subscribe((data) => {
      this.productService.getProductById(data.id).subscribe((product: Product) => {
        this.product = product;
      });
    })
  }

  ngOnInit() {
  }

  addToCart(product: Product, requiredQuantity: number) {
    this.cartItemService.save(
      new CartItem(0, product, requiredQuantity)).subscribe((cartItem: CartItem) => {
      this.message = "Product " + cartItem.product.name + " successfully added. Required quantity: " + cartItem.requiredQuantity;
    });

    //console.log(requiredQuantity);

  }

}
