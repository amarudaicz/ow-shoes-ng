import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsModelComponent } from './list-products-model.component';

describe('ListProductsModelComponent', () => {
  let component: ListProductsModelComponent;
  let fixture: ComponentFixture<ListProductsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
