import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaleViewComponent } from './edit-sale-view.component';

describe('EditSaleViewComponent', () => {
  let component: EditSaleViewComponent;
  let fixture: ComponentFixture<EditSaleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSaleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSaleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
