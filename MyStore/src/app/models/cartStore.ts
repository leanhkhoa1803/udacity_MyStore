import Product from './product';
export default class CartStore {
  product: Product = new Product();
  amount: number = 0;

  constructor() {}
}
