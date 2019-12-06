import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegistrationComponent } from './registration/registration.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', loadChildren:() => import('./shopping/shopping.module').then((m) => m.ShoppingModule) },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }    
];