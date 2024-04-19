import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/products.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  theProduct: ProductModel = new ProductModel(0, '', 0, 0, 0, '');
  constructor(public route: ActivatedRoute, public srvObj: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe((r: any) => {
      this.id = r.id;
      this.srvObj
        .getProductById(this.id)
        .subscribe((response: ProductModel) => {
          this.theProduct = response;
        });
    });
  }
}
