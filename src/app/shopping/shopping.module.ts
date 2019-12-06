import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { appRoutes} from './routerconfig';
import { HighlightDirective} from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class ShoppingModule { }
