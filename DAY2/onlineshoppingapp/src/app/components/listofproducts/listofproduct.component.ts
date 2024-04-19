import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../service/products.service';

@Component({
  selector: `list-of-products`,
  templateUrl: `./listofproducts.component.html`,
})
export class ListOfProducts implements OnInit {
  products: ProductModel[] = [];
  constructor(public srvObj: ProductService) {}
  ngOnInit(): void {
    this.srvObj.getAllProducts().subscribe((response: any) => {
      this.products = response;
    });
  }
}
