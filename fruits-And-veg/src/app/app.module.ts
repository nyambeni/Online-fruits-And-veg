import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { SellerRegComponent } from './seller-reg/seller-reg.component';
import { BuyerRegComponent } from './buyer-reg/buyer-reg.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {LoginComponent } from './login/login.component';
import { BsnavbarComponent } from './bsnavbar/bsnavbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SellerRegComponent,
    BuyerRegComponent,
    HomeComponent,
    AdminComponent,
    ProductsComponent,
    AdminLoginComponent,
    LoginComponent,
    BsnavbarComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"registration", component: RegistrationComponent},
      {path: "buyerReg", component: BuyerRegComponent},
      {path: "sellerReg", component:SellerRegComponent},
      {path: "home", component: HomeComponent},
      {path: "admin", component: AdminComponent},
      {path: "products",component: ProductsComponent},
      {path: "login",component: LoginComponent},
      {path: "nav",component: BsnavbarComponent}
    
  
    ])
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
