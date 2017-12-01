import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
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
    path: '',
    component: LoginComponent,
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
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
