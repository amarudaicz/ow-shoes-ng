import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSwatchesComponent } from './size-swatches.component';

describe('SizeSwatchesComponent', () => {
  let component: SizeSwatchesComponent;
  let fixture: ComponentFixture<SizeSwatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeSwatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeSwatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
