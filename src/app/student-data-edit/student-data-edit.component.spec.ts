import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataEditComponent } from './student-data-edit.component';

describe('StudentDataEditComponent', () => {
  let component: StudentDataEditComponent;
  let fixture: ComponentFixture<StudentDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
