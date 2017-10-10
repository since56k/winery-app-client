import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerInfoComponent } from './buyer-info.component';

describe('BuyerInfoComponent', () => {
  let component: BuyerInfoComponent;
  let fixture: ComponentFixture<BuyerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
