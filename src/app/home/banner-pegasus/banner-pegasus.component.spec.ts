import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPegasusComponent } from './banner-pegasus.component';

describe('BannerPegasusComponent', () => {
  let component: BannerPegasusComponent;
  let fixture: ComponentFixture<BannerPegasusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPegasusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPegasusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
