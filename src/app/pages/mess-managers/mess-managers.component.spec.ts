import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessManagersComponent } from './mess-managers.component';

describe('MessManagersComponent', () => {
  let component: MessManagersComponent;
  let fixture: ComponentFixture<MessManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessManagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
