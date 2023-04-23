import {Component, Input} from '@angular/core';
import {Tariff} from "../../shared/models/tarifs";

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.sass']
})
export class TariffListComponent {
  @Input() tariffs: Tariff[] = [];

}
