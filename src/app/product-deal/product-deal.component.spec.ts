import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDealComponent } from './product-deal.component';

describe('ProductDealComponent', () => {
  let component: ProductDealComponent;
  let fixture: ComponentFixture<ProductDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
