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



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SellerRegComponent,
    BuyerRegComponent,
    HomeComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"registration", component: RegistrationComponent},
      {path: "buyerReg", component: BuyerRegComponent},
      {path: "sellerReg", component:SellerRegComponent},
      {path: "home", component: HomeComponent},
      {path: "admin", component: AdminComponent}
  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
