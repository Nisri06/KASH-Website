import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewComponent } from './review/review.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { VerticalTabsComponent } from './vertical-tabs/vertical-tabs.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [

    HomeComponent,
    CheckoutComponent,
    OrdersComponent,
    ProductDetailsComponent,
    ReviewComponent,
    ShopByCategoryComponent,
    CustomerSupportComponent,
    VerticalTabsComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // Add this to your imports
  ],
})
  export class AppModule { }
