import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessEmployeesComponent } from './mess-employees.component';

describe('MessEmployeesComponent', () => {
  let component: MessEmployeesComponent;
  let fixture: ComponentFixture<MessEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessEmployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
