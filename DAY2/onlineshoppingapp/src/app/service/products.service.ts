import { ProductModel } from '../models/product.model';

export class ProductService {
  products: ProductModel[] = [
    {
      id: 1,
      title: 'Laptop',
      price: 50000,
      rating: 4,
      imageUrl:
        'https://rukminim1.flixcart.com/image/704/704/j431rbk0/computer/t/h/p/hp-notebook-original-imaev2zfjqfpf3ng.jpeg?q=70',
      likes: 100,
    },
    {
      id: 2,
      title: 'OLED TV',
      price: 25000,
      rating: 3,
      imageUrl:
        'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled65a3psa_atr_eail_in_c/gallery/TV-OLED-65-A3-A-Gallery-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
      likes: 500,
    },
    {
      id: 3,
      title: 'Desktop',
      price: 10000,
      rating: 3,
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/I/41IjXCFmiRL._SL500_AC_SS350_.jpg',
      likes: 200,
    },
    {
      id: 4,
      title: 'Mobile',
      price: 20000,
      rating: 5,
      imageUrl:
        'https://5.imimg.com/data5/SELLER/Default/2022/3/BK/TA/UG/148618475/vivo-y19-mobile-phones.jpg',
      likes: 400,
    },
    {
      id: 5,
      title: 'Camera',
      price: 90000,
      rating: 4,
      imageUrl:
        'https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8joW7yUnybX4TANUFk0STA8w==/Views/1554_D7200_left.png',
      likes: 100,
    },
  ];

  getAllProducts(): ProductModel[] {
    return this.products;
  }
}
