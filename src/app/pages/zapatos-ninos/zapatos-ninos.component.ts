import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zapatos-ninos',
  templateUrl: './zapatos-ninos.component.html',
  styleUrls: ['./zapatos-ninos.component.scss']
})
export class ZapatosNinosComponent {
  titlePage = 'Adidas | Zapatos para Niños';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }
}
