import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuyProductComponent } from './modal-buy-product.component';

describe('ModalBuyProductComponent', () => {
  let component: ModalBuyProductComponent;
  let fixture: ComponentFixture<ModalBuyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBuyProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
