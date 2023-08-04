import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zapatos-mujer',
  templateUrl: './zapatos-mujer.component.html',
  styleUrls: ['./zapatos-mujer.component.scss']
})
export class ZapatosMujerComponent {
  titlePage = 'Adidas | Zapatos para Mujer';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
