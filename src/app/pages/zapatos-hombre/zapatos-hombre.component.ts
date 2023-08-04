import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Productos } from 'src/app/data/data.products';

@Component({
  selector: 'app-zapatos-hombre',
  templateUrl: './zapatos-hombre.component.html',
  styleUrls: ['./zapatos-hombre.component.scss']
})
export class ZapatosHombreComponent {
  productsArray = Productos.filter(product => product.categories.includes("hombre"));
  titlePage = 'Adidas | Zapatos para Hombre';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
