import { Component, OnInit } from '@angular/core';
import Product from '../../models/product';
import { ProductListsService } from '../../services/product-lists.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductListsService],
})
export class ProductListComponent implements OnInit {
  productLists: Product[] = [];

  constructor(private productListService: ProductListsService) {}

  ngOnInit(): void {
    this.productListService.getProductList().subscribe((productLists) => {
      this.productLists = productLists;
    });
  }
}
