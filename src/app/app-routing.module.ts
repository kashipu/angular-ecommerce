import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZapatosMujerComponent } from './pages/zapatos-mujer/zapatos-mujer.component';
import { ZapatosHombreComponent } from './pages/zapatos-hombre/zapatos-hombre.component';
import { ZapatosNinosComponent } from './pages/zapatos-ninos/zapatos-ninos.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent, pathMatch: 'full'},
  { path: 'zapatos-mujer', component: ZapatosMujerComponent },
  { path: 'zapatos-hombre', component: ZapatosHombreComponent },
  { path: 'zapatos-ninos', component: ZapatosNinosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
