import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortDirective} from "./directives/sort.directive";

@NgModule({
  declarations: [SortDirective],
  imports: [CommonModule],
  exports: [SortDirective],
})
export class SharedModule {}
