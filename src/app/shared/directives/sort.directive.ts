import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() tariffs: any[] = [];
  @Input() property: 'id' | 'name' | 'price' | 'downloadSpeed' | 'uploadSpeed' | 'tariffBenefits' | undefined;
  @Output() propertyChange: EventEmitter<'id' | 'name' | 'price' | 'downloadSpeed' | 'uploadSpeed' | 'tariffBenefits'> = new EventEmitter();
  @Output() directionChange: EventEmitter<'asc' | 'desc'> = new EventEmitter();
  private sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    if (this.tariffs && this.property) {
      this.sort(this.property);
      this.propertyChange.emit(this.property);
      this.directionChange.emit(this.sortDirection);
    }
  }

  private sort(property: 'id' | 'name' | 'price' | 'downloadSpeed' | 'uploadSpeed' | 'tariffBenefits') {
    this.tariffs.sort((a, b) => {
      if (a[property] === b[property]) {
        return 0;
      }

      if (typeof a[property] === 'string' && typeof b[property] === 'string') {
        if (this.sortDirection === 'asc') {
          return (a[property] as string).localeCompare(b[property] as string);
        } else {
          return (b[property] as string).localeCompare(a[property] as string);
        }
      } else {
        if (this.sortDirection === 'asc') {
          return a[property] > b[property] ? 1 : -1;
        } else {
          return a[property] < b[property] ? 1 : -1;
        }
      }
    });

    this.toggleSortDirection();
  }

  private toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
}
