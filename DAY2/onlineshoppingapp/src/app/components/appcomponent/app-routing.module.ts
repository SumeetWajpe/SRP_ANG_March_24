import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProducts } from '../listofproducts/listofproduct.component';
import { PostsComponent } from '../posts/posts.component';
import { ErrorComponent } from '../error/error.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfProducts,
  },
  {
    path: 'productdetails',
    component: ProductDetailsComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
