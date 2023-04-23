import {Component, OnInit} from '@angular/core';
import {TariffService} from "../shared/services/tariff.service";
import {Tariff} from "../shared/models/tarifs";

@Component({
  selector: ' app-tariff-container',
  templateUrl: './tariff-container.component.html',
  styleUrls: ['./tariff-container.component.sass']
})
export class TariffContainerComponent implements OnInit{
  tariffs: Tariff[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedProperty: keyof typeof this.tariffs[0] | null = null;
  constructor(private resultService: TariffService) {
  }
  ngOnInit() {
    this.getTariffs();
  }

  getTariffs() {
    this.resultService.getTariffs().subscribe({
      next: res => {
        this.tariffs = res;
      },
      error: error => {
        // TODO ERROR HANDLING?
        console.log('error', error);
      }
    });
  }
  toggleArrow(property: string): string {
    if (this.selectedProperty === property) {
      return this.sortDirection === 'asc' ? '&#x25B4;' : '&#x25BE;';
    }
    return '&#x25B4;';
  }
}
