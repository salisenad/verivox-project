import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffContainerComponent } from './tariff-container.component';

describe('ResultListComponent', () => {
  let component: TariffContainerComponent;
  let fixture: ComponentFixture<TariffContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
