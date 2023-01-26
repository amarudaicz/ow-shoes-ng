import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsVariantsComponent } from './list-products-variants.component';

describe('ListProductsVariantsComponent', () => {
  let component: ListProductsVariantsComponent;
  let fixture: ComponentFixture<ListProductsVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
