import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Product from '../models/product';
import CartStore from '../models/cartStore';

@Injectable({
  providedIn: 'root',
})
export class ProductListsService {
  constructor(private http: HttpClient) {}

  cartStore = new BehaviorSubject<CartStore[]>([]);
  cartData = this.cartStore.asObservable();

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json');
  }

  getProducts() {
    return this.cartStore.getValue();
  }

  addProduct(product: Product, amount: number) {
    let currentProductInCart = this.cartStore.getValue();

    let existedProductInCart = currentProductInCart.find(
      (item: any) => item.product.id == product.id
    );

    if (existedProductInCart) {
      const updatedCartStore = currentProductInCart.map((item: CartStore) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            amount: Number(item.amount) + Number(amount),
          };
        }
        return item;
      });

      this.cartStore.next(updatedCartStore);
    } else {
      const newProductInCart: CartStore = {
        product: product,
        amount: amount,
      };
      const updatedCartStore = [...currentProductInCart, newProductInCart];

      this.cartStore.next(updatedCartStore);
    }
  }

  removeProductFromCart(product: Product) {
    let currentCart = this.cartStore.getValue();
    const productExists = currentCart.some(
      (item: CartStore) => item.product.id === product.id
    );

    if (!productExists) {
      return;
    }

    const updatedCartStore = currentCart.filter(
      (item: CartStore) => item.product.id !== product.id
    );

    this.cartStore.next(updatedCartStore);
  }
}
