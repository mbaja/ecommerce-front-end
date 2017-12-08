import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BucciComponent } from './bucci/bucci.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';
import { FlashMessageModule } from 'angular-flash-message';

import { StoreComponent } from './store/store.component';
import { VendorComponent } from './vendor/vendor.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [AuthGuard],
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'item/:id',
    canActivate: [AuthGuard],
    component: ItemsPageComponent
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    component: ShoppingCartComponent
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    component: CheckoutComponent
  },
  {
    path: 'myaccount',
    canActivate: [AuthGuard],
    component: MyaccountComponent
  },
  {
    path: 'bucci',
    canActivate: [AuthGuard],
    component: BucciComponent
  },
  {
    path: 'review/:id',
    canActivate: [AuthGuard],
    component: ReviewComponent
  },
  {
    path: 'store',
    canActivate: [AuthGuard],
    component: StoreComponent
  },
  {
    path: 'vendor/:name',
    canActivate: [AuthGuard],
    component: VendorComponent
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
    StoreComponent,
    VendorComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessageModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
