import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyComponent } from './comapny.component';

describe('ComapnyComponent', () => {
  let component: ComapnyComponent;
  let fixture: ComponentFixture<ComapnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
