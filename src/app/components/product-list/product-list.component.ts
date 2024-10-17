import { Component, OnInit } from '@angular/core';
import Product from '../../models/product';
import { ProductListsService } from '../../services/product-lists.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  productLists: Product[] = [];

  constructor(private _productListService: ProductListsService) {}

  ngOnInit(): void {
    this._productListService.getProductList().subscribe((productLists) => {
      this.productLists = productLists;
    });
  }
}
