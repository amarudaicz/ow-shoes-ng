import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGraphicBarComponent } from './stats-graphic-bar.component';

describe('StatsGraphicBarComponent', () => {
  let component: StatsGraphicBarComponent;
  let fixture: ComponentFixture<StatsGraphicBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsGraphicBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsGraphicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
