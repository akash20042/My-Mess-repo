import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessDetailsComponent } from './mess-details.component';

describe('MessDetailsComponent', () => {
  let component: MessDetailsComponent;
  let fixture: ComponentFixture<MessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
