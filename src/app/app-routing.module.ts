import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FligsComponent } from './component/fligs/fligs.component';
import { CountryComponent } from './component/country/country.component';

const routes: Routes = [
  { path: '', component: FligsComponent },
  { path: 'detail/:data', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
