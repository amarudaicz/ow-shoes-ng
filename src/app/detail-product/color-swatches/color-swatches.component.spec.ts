import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwatchesComponent } from './color-swatches.component';

describe('ColorSwatchesComponent', () => {
  let component: ColorSwatchesComponent;
  let fixture: ComponentFixture<ColorSwatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSwatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorSwatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
