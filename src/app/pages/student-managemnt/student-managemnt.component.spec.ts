import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagemntComponent } from './student-managemnt.component';

describe('StudentManagemntComponent', () => {
  let component: StudentManagemntComponent;
  let fixture: ComponentFixture<StudentManagemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentManagemntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentManagemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
