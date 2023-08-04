import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopAlertComponent } from './components/top-alert/top-alert.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopAlertComponent,
    BreadcrumbComponent,
    PageTitleComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
