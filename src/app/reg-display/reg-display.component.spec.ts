import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDisplayComponent } from './reg-display.component';

describe('RegDisplayComponent', () => {
  let component: RegDisplayComponent;
  let fixture: ComponentFixture<RegDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegDisplayComponent]
    });
    fixture = TestBed.createComponent(RegDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
