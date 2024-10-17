import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];
