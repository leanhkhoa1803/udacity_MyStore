import { Component, OnInit } from '@angular/core';
import CartStore from '../../models/cartStore';
import { ProductListsService } from '../../services/product-lists.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(
    private _productListService: ProductListsService,
    private _router: Router
  ) {}
  itemsInCart: CartStore[] = [];
  totalPrice: number = 0;

  fullName: string = '';
  address: string = '';
  creditCard: any;

  ngOnInit(): void {
    this.itemsInCart = this._productListService.getProducts();
    this.itemsInCart.forEach((item) => {
      this.totalPrice += item.amount * item.product.price;
    });
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }

  handleSubmit() {
    this._router.navigateByUrl(
      `confirmation?fullName=${this.fullName}&totalPrice=${this.totalPrice}`
    );
    this.clearInfoUser();
    alert('Submit');
  }

  clearInfoUser() {
    this._productListService.cartStore.next([]);
    this.fullName = '';
    this.address = '';
    this.creditCard = '';
    this.totalPrice = 0;
  }

  onHandleAmountChange(event: any) {
    if (event.amount === 0) {
      alert('Remove product');
      this._productListService.removeProductFromCart(event.product);

      this.itemsInCart = this.itemsInCart.filter(
        (item: any) => item.product.id !== event.product.id
      );
    } else {
      const cartItem = this.itemsInCart.find(
        (item: any) => item.product.id === event.product.id
      );

      if (cartItem) {
        cartItem.amount = event.amount;
      }
    }

    this.totalPrice = this.itemsInCart.reduce((sum, item) => {
      return sum + item.amount * item.product.price;
    }, 0);

    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }
}
