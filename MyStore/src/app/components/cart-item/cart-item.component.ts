import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import CartStore from '../../models/cartStore';
import Product from '../../models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent implements OnInit {
  @Input() productData: CartStore = new CartStore();
  @Output() amountChange = new EventEmitter();

  product: Product = new Product();
  amount: number = 0;

  ngOnInit(): void {
    this.product = this.productData.product;
    this.amount = Number(this.productData.amount);
  }

  onAmountChange() {
    const emmitObject = {
      amount: this.amount,
      product: this.product,
    };
    this.amountChange.emit(emmitObject);
  }
}
