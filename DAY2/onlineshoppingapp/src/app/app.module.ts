import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/appcomponent/app-routing.module';
import { AppComponent } from './components/appcomponent/app.component';
import { ListOfProducts } from './components/listofproducts/listofproduct.component';
import { Product } from './components/product/product.component';
import { TwowaybindComponent } from './components/twowaybind/twowaybind.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListOfProducts, Product, TwowaybindComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
