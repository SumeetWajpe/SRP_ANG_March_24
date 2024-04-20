import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  theProduct: ProductModel | undefined;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public store: Store<{ products: ProductModel[] }>
  ) {
    this.theProduct = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe((r: any) => {
      this.id = r.id;
    });
    let allProducts = this.store.select('products');
    allProducts.subscribe(
      (allPs) => (this.theProduct = allPs.find((p:ProductModel) => p.id == this.id))
    );
  }

  DeleteProductById(): void {}
}
