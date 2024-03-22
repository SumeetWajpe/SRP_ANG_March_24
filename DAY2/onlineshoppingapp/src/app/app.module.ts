import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/appcomponent/app-routing.module';
import { AppComponent } from './components/appcomponent/app.component';
import { ListOfProducts } from './components/listofproducts/listofproduct.component';
import { Product } from './components/product/product.component';
import { TwowaybindComponent } from './components/twowaybind/twowaybind.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './components/rating/rating.component';
import { ProductService } from './service/products.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './service/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    ListOfProducts,
    Product,
    TwowaybindComponent,
    RatingComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductService, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
