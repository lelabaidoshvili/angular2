import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './product/product.component';




const appRoutes: Routes =[
  {path: '', component: ButtonComponent},
  {path: 'user', component: UserComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'basket', component: BasketComponent},
  

]
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UserComponent,
    BasketComponent,
    ShopComponent,
    ProductComponent,
   
    
   
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
