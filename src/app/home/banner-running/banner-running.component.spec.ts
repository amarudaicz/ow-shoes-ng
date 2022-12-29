import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRunningComponent } from './banner-running.component';

describe('BannerRunningComponent', () => {
  let component: BannerRunningComponent;
  let fixture: ComponentFixture<BannerRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerRunningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
