import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zapatos-hombre',
  templateUrl: './zapatos-hombre.component.html',
  styleUrls: ['./zapatos-hombre.component.scss']
})
export class ZapatosHombreComponent {
  titlePage = 'Adidas | Zapatos para Hombre';
  cantProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
