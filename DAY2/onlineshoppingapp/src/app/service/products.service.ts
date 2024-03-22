import { ProductModel } from '../models/product.model';

export class ProductService {
  products: ProductModel[] = [];

  getAllProducts(): ProductModel[] {
    return this.products;
  }
}
