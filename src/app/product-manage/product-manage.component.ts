import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {

  public productForm: FormGroup;

  constructor() {
    this.doNew();
  }

  ngOnInit() {
  }

  doNew() {
    this.productForm = new FormGroup({
      id: new FormControl('0', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      source: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required, this.photoUrlValidation])
    });
  }

  save() {
    let product: Product = this.productForm.value;
    console.log(product);
  }

  photoUrlValidation(control: AbstractControl) {
    let value: string = control.value;
    let values: string[] = value.split('.');
    if (values[values.length - 1] === 'png')
      return null;
    else
      return { 'photofilenameerror': { valid: false, value: control.value } };

  }

}
