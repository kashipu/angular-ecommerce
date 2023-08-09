import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  dataInit:Product = {
    id: '',
    name: '',
    price: 0,
    discount: 0,
    description: '',
    image: '',
    categories: [],
    tags: [],
    calification: 0,
    cantidad: 0,
    stock: 0
  };
  @Input() product: Product = this.dataInit;
}
