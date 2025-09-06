import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowcaseComponentComponent } from './home-showcase-component.component';

describe('HomeShowcaseComponentComponent', () => {
  let component: HomeShowcaseComponentComponent;
  let fixture: ComponentFixture<HomeShowcaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeShowcaseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShowcaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
