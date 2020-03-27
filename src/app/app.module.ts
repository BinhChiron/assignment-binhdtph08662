import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { NavComponent } from './nav/nav.component';
import { ProductDealComponent } from './product-deal/product-deal.component';
import { ProductBestComponent } from './product-best/product-best.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    ShopCartComponent,
    NavComponent,
    ProductDealComponent,
    ProductBestComponent,
    ProductManagerComponent,
    ProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
