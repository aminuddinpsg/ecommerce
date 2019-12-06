import { Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

export const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'productdetail/:id', component:ProductDetailComponent},
    
];  