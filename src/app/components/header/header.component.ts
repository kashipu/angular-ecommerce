import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  shoppingCart: boolean = false;
  responsiveMenu: boolean = true;
  counterItemsCar: number = 0;
  constructor(private ProductosService: ProductosService) { }
  ngOnInit(): void {
    this.ProductosService.getShoppingCart().subscribe(() => {
      this.counterItemsCar = this.ProductosService.SHOPPING_CART.length;
    });
    this.responsiveMenu = false;
  }
  showMenu() {
    this.responsiveMenu = !this.responsiveMenu;
    document.body.style.overflow = this.responsiveMenu ? 'hidden' : 'auto';
  }
  showCart() {
    this.shoppingCart = !this.shoppingCart;
    console.log("hola")
  }
  restartMenu() {
    this.responsiveMenu = false;
    document.body.style.overflow = 'auto'
  }
}
