import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZapatosMujerComponent } from './pages/zapatos-mujer/zapatos-mujer.component';
import { ZapatosHombreComponent } from './pages/zapatos-hombre/zapatos-hombre.component';
import { ZapatosNinosComponent } from './pages/zapatos-ninos/zapatos-ninos.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent, data:{breadcrumb: 'Home'}, pathMatch: 'full'},
  { path: 'carrito', component: CarritoComprasComponent, data:{breadcrumb: 'Home'} },
  { path: 'zapatos-mujer', component: ZapatosMujerComponent, data:{breadcrumb: 'Zapatos mujer'} },
  { path: 'zapatos-hombre', component: ZapatosHombreComponent, data:{breadcrumb: 'Zapatos hombre'} },
  { path: 'zapatos-ninos', component: ZapatosNinosComponent, data:{breadcrumb: 'Zapatos Niño'} },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
