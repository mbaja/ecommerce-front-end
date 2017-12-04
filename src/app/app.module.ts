import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserService } from './user.service';
import { BucciComponent } from './bucci/bucci.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'item',
    component: ItemsPageComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'myaccount',
    component: MyaccountComponent
  },
  {
    path: 'bucci',
    component: BucciComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ItemsPageComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    BucciComponent,
    MyaccountComponent,
    NavbarComponent,
    ReviewComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
