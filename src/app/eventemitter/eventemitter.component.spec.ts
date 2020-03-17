import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemitterComponent } from './eventemitter.component';

describe('EventemitterComponent', () => {
  let component: EventemitterComponent;
  let fixture: ComponentFixture<EventemitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventemitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventemitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
