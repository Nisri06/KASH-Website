import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component'; // Import your component
import { AuthComponent } from './auth/auth.component'; // Assuming your authentication component is named AuthComponent
const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: '/checkout', pathMatch: 'full' }, // Default route
  { path: 'customer-support', component: CustomerSupportComponent }, // Add this route
  { path: 'auth', component: AuthComponent }, // Add this line for authentication
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

