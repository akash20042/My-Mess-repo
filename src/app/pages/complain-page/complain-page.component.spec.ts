import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainPageComponent } from './complain-page.component';

describe('ComplainPageComponent', () => {
  let component: ComplainPageComponent;
  let fixture: ComponentFixture<ComplainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
