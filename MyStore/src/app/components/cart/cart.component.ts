import { Component, OnInit } from '@angular/core';
import CartStore from '../../models/cartStore';
import { ProductListsService } from '../../services/product-lists.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CartItemComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private _productListService: ProductListsService) {}
  itemsInCart: CartStore[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.itemsInCart = this._productListService.getProducts();
    this.itemsInCart.forEach((item) => {
      this.totalPrice += item.amount * item.product.price;
    });
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }
}
