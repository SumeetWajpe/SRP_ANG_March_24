import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'onlineshoppingwithngrx';
  _products: any;
  constructor(public store: Store<{ products: any }>) {
    this._products = this.store.select('products');
  }
}
