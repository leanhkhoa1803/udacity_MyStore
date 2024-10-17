import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  fullName: string = '';
  totalPrice: string = '';

  ngOnInit(): void {
    this.fullName = this._activatedRoute.snapshot.queryParams['fullName'] || '';
    this.totalPrice =
      this._activatedRoute.snapshot.queryParams['totalPrice'] || '';
  }
  navigateToProductList() {
    this._router.navigateByUrl('/product');
  }
}
