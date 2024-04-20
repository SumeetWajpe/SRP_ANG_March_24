import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: `list-of-products`,
  templateUrl: `./listofproducts.component.html`,
})
export class ListOfProducts {
  _products: Observable<ProductModel[]>;
  constructor(public store: Store<{ products: ProductModel[] }>) {
    this._products = this.store.select('products');
  }
}
