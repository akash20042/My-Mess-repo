import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessManagementComponent } from './mess-management.component';

describe('MessManagementComponent', () => {
  let component: MessManagementComponent;
  let fixture: ComponentFixture<MessManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
