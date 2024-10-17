import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductListsService } from '../../services/product-lists.service';
import Product from '../../models/product';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productListService: ProductListsService
  ) {}
  product: Product | any;
  productId: string = '';
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

  ngOnInit(): void {
    const idParam = this._activatedRoute.snapshot.params['id'] || '';

    this._productListService
      .getProductList()
      .subscribe((products: Product[]) => {
        this.product = products.find(
          (product: Product) => product.id == Number(idParam)
        );
      });
  }

  addProduct(product: Product, amount: number) {
    this._productListService.addProduct(product, amount);
    alert('Add to Cart !');
  }
}
