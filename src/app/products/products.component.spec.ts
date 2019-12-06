import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductService } from '../services/product.service';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

class MockProductService extends ProductService{
  // overide the actual service
  getProducts(): Observable<Product[]> {
    // convert to Observable
    return of([
      { name: "Television" },
      { name: "Radio" }
    ]);
  }

}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[],
      declarations: [ProductsComponent],
      providers:[{provide:ProductService, useClass:MockProductService}] // need to provide when using the service
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have products list populated', () => {
    expect(component.products.length).toBeGreaterThan(1);
  });

});
