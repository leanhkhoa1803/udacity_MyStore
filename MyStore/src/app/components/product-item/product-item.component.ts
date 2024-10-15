import { Component, Input, OnInit } from '@angular/core';
import Product from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  selectOptions = [
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
}
