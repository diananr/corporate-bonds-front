import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleListViewComponent } from './sale-list-view.component';

describe('SaleListViewComponent', () => {
  let component: SaleListViewComponent;
  let fixture: ComponentFixture<SaleListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
