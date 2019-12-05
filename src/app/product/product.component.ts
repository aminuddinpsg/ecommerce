import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';


@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: Product;

  @Output()
  public notify: EventEmitter<any>;

  @Input()
  public view: string;

  @Input()
  public counter: number;

  constructor() {
    this.notify = new EventEmitter<CartItem>();
    this.view = 'gallery';
  }

  ngOnInit() {

  }

  addToCart(product: Product, requiredQuantity: any) {
    let quantity:number = requiredQuantity.value;
    requiredQuantity.value = "";
    this.notify.emit({ id: 0, product: product, requiredQuantity: quantity });
    //this.notify.emit();
  }

}
