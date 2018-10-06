import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSaleItemComponent } from './pos-item.component';

describe('PosItemComponent', () => {
  let component: PointOfSaleItemComponent;
  let fixture: ComponentFixture<PointOfSaleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfSaleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfSaleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
