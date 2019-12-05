import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'productdetail/:id', component: ProductDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }    
];