import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerconfig';
import { UtilityModule } from './utility/utility.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { CartItemService } from './services/cart-item.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ShoppingCartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    UtilityModule
  ],
  providers: [ProductService,
    CartItemService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
