import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FligsComponent } from './component/fligs/fligs.component';

const routes: Routes = [{ path: '', component: FligsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
