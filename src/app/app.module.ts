import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerconfig';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { CartItemService } from './services/cart-item.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { GreetingPipe } from './pipes/greeting.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    RegistrationComponent,
    ProductComponent,
    ShoppingCartComponent,
    HomeComponent,
    ProductDetailComponent,
    UnlessDirective,
    HighlightDirective,
    GreetingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,
    CartItemService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
