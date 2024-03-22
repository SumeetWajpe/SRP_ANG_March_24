import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../service/products.service';

@Component({
  selector: `list-of-products`,
  templateUrl: `./listofproducts.component.html`,
})
export class ListOfProducts {
  products: ProductModel[] = [];
  constructor(public srvObj: ProductService) {
    this.products = this.srvObj.getAllProducts();
  }
}
