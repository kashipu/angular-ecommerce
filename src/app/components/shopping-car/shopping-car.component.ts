import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent {
  carrito: any[] = [];
  constructor(private ProductosService: ProductosService) {
    this.ProductosService.getShoppingCart().subscribe(carrito => {
      this.carrito = carrito;
    });
  }

}
