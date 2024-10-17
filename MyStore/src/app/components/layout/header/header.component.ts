import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductListsService } from '../../../services/product-lists.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;
  badgeCount: number = 0;
  constructor(private _productListService: ProductListsService) {}
  ngOnInit(): void {
    this.getDataInCart();
  }

  getDataInCart() {
    this._productListService.cartData.subscribe((data) => {
      this.badgeCount = data.length;
    });
  }
}
