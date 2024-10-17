import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Product from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductListsService } from '../../services/product-lists.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() addedToCart = new EventEmitter();

  constructor(
    private _productListService: ProductListsService,
    private _router: Router
  ) {}
  amount: number = 1;

  options = [
    {
      option: 'Option 1',
      value: 1,
    },
    {
      option: 'Option 2',
      value: 2,
    },
    {
      option: 'Option 3',
      value: 3,
    },
    {
      option: 'Option 4',
      value: 4,
    },
    {
      option: 'Option 5',
      value: 5,
    },
    {
      option: 'Option 6',
      value: 6,
    },
    {
      option: 'Option 7',
      value: 7,
    },
    {
      option: 'Option 8',
      value: 8,
    },
    {
      option: 'Option 9',
      value: 9,
    },
    {
      option: 'Option 10',
      value: 10,
    },
  ];
  ngOnInit(): void {}

  addToCart(product: Product, amount: number) {
    this._productListService.addProduct(product, amount);
    alert('Add Product to Cart , Please clicking to cart to review');
  }

  navigateToProductDetail(id: number): void {
    this._router.navigateByUrl(`/product/${id}`);
  }
}
