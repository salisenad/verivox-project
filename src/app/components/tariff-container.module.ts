import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TariffContainerComponent} from "./tariff-container.component";
import {TariffContainerRoutingModule} from "./tariff-container-routing.module";
import {TariffListComponent} from "./tariff-list/tariff-list.component";
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    TariffContainerComponent,
    TariffListComponent
  ],
  imports: [
    CommonModule,
    TariffContainerRoutingModule,
    SharedModule
  ]
})
export class TariffContainerModule { }
