import { Injectable } from '@angular/core';
/* Modelos */
import { Product } from '../models/Product.model';
/* Data */
import { Productos } from '../data/data.products';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  PRODUCTS_DATA: Product[] = Productos;
  SHOPPING_CART: Product[] = [];
  _updateShoppingCart = new BehaviorSubject<Product[]>(this.SHOPPING_CART);
  constructor() {
    console.log()
   }
  getAllProducts(): Product[] {
    return this.PRODUCTS_DATA;
  }
  filterByCategory(category: string): Product[] {
    return this.PRODUCTS_DATA.filter(product => product.categories.includes(category));
  }
  addToCarById(id: number): void {
    const product = this.PRODUCTS_DATA.find(product => product.id === id);
    if (product) {
      this.SHOPPING_CART.push(product);
      this._updateShoppingCart.next(this.SHOPPING_CART);
    }
  }
  getShoppingCart() {
    return this._updateShoppingCart.asObservable();
  }
}

