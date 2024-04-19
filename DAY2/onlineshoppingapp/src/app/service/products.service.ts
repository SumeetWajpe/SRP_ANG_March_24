import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: ProductModel[] = [];

  constructor(public httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<ProductModel[]>(
      'http://localhost:3500/products'
    );
  }
}
