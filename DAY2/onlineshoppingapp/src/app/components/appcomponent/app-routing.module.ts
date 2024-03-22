import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProducts } from '../listofproducts/listofproduct.component';
import { PostsComponent } from '../posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfProducts,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
