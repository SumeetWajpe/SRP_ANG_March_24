import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { incrementLikes } from '../../../ngrx/actions/products.actions';

@Component({
  selector: `product`,
  templateUrl: `./product.component.html`,
  styleUrl: './product.component.css',
})
export class Product {
  @Input() productdetails: ProductModel = new ProductModel(
    0,
    '',
    0,
    0,
    0,
    '',
    ''
  );
  isAddedToCart: boolean = false;
  constructor(public store: Store<{ products: ProductModel[] }>) {}
  IncrementLikes(): void {
    this.store.dispatch(incrementLikes(this.productdetails.id));
  }
}
