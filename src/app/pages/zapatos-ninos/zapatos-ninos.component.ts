import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Productos } from 'src/app/data/data.products';

@Component({
  selector: 'app-zapatos-ninos',
  templateUrl: './zapatos-ninos.component.html',
  styleUrls: ['./zapatos-ninos.component.scss']
})
export class ZapatosNinosComponent {
  productsArray = Productos.filter(product => product.categories.includes("niño"));
  titlePage = 'Adidas | Zapatos para Niños';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
