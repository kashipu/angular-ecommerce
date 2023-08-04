import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Productos } from 'src/app/data/data.products';

@Component({
  selector: 'app-zapatos-mujer',
  templateUrl: './zapatos-mujer.component.html',
  styleUrls: ['./zapatos-mujer.component.scss']
})
export class ZapatosMujerComponent {
  titlePage = 'Adidas | Zapatos para Mujer';
  productsArray = Productos.filter(product => product.categories.includes("mujer"));
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
