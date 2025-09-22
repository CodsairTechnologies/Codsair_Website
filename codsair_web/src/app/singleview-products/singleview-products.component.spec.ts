import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleviewProductsComponent } from './singleview-products.component';

describe('SingleviewProductsComponent', () => {
  let component: SingleviewProductsComponent;
  let fixture: ComponentFixture<SingleviewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleviewProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleviewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
