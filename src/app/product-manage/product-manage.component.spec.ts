import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductManageComponent } from './product-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProductManageComponent', () => {
  let component: ProductManageComponent;
  let fixture: ComponentFixture<ProductManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductManageComponent
      ],
      imports: [FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let populatedData = () => {
    component.productForm.controls['id'].setValue(1)
    component.productForm.controls['name'].setValue('Radio')
    component.productForm.controls['description'].setValue('To Watch Movies')
    component.productForm.controls['quantity'].setValue(3)
    component.productForm.controls['price'].setValue(14444)
    component.productForm.controls['source'].setValue('UK')
    component.productForm.controls['photo'].setValue('haha.png')
  }

  it('should form valid', () => {
    populatedData();
    expect(component.productForm.valid).toBeTruthy();
  });

  it('should photo name have png', () => {
    populatedData();
    component.productForm.controls['photo'].setValue('radio');
    expect(component.productForm.valid).toBeFalsy();
  })
});
