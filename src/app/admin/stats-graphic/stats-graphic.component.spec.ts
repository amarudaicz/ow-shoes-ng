import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { StatsGraphicComponent } from './stats-graphic.component';

describe('StatsGraphicComponent', () => {
  let component: StatsGraphicComponent;
  let fixture: ComponentFixture<StatsGraphicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsGraphicComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
