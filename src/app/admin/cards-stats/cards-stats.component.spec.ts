import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStatsComponent } from './cards-stats.component';

describe('CardsStatsComponent', () => {
  let component: CardsStatsComponent;
  let fixture: ComponentFixture<CardsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
