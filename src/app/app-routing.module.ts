import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZapatosMujerComponent } from './pages/zapatos-mujer/zapatos-mujer.component';
import { ZapatosHombreComponent } from './pages/zapatos-hombre/zapatos-hombre.component';
import { ZapatosNinosComponent } from './pages/zapatos-ninos/zapatos-ninos.component';

const routes: Routes = [
  { path: '', component: ZapatosHombreComponent, pathMatch: 'full'},
  { path: 'zapatos-mujer', component: ZapatosMujerComponent },
  { path: 'zapatos-hombre', component: ZapatosHombreComponent },
  { path: 'zapatos-ninos', component: ZapatosNinosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
