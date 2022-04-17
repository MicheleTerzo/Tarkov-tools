import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoChartComponent } from './ammo-chart.component';

describe('AmmoChartComponent', () => {
  let component: AmmoChartComponent;
  let fixture: ComponentFixture<AmmoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
