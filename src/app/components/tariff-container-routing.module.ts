import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TariffContainerComponent} from "./tariff-container.component";

const routes: Routes = [
  {
    path: '',
    component: TariffContainerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffContainerRoutingModule { }
