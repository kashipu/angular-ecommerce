import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  counterItemsCar: number = 0;
  constructor(private ProductosService: ProductosService) {}
  ngOnInit(): void {
    this.ProductosService.getShoppingCart().subscribe(() => {
      this.counterItemsCar = this.ProductosService.SHOPPING_CART.length;
    });
  }
}
