import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteDetailsComponent } from './qoute-details.component';

describe('QuoteDetailsComponent', () => {
  let component: QouteDetailsComponent;
  let fixture: ComponentFixture<QouteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
