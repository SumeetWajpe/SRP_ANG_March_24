import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/appcomponent/app-routing.module';
import { AppComponent } from './components/appcomponent/app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../ngrx/reducers/products.reducer';
import { ListOfProducts } from './components/listofproducts/listofproduct.component';
import { Product } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ListOfProducts,
    Product,
    RatingComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
