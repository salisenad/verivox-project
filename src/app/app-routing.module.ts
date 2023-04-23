import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tariffs',
    pathMatch: 'full'
  },
  {
    path: 'tariffs',
    loadChildren: () => import('src/app/components/tariff-container.module').then(m => m.TariffContainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
