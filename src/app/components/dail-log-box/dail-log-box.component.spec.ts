import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailLogBoxComponent } from './dail-log-box.component';

describe('DailLogBoxComponent', () => {
  let component: DailLogBoxComponent;
  let fixture: ComponentFixture<DailLogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailLogBoxComponent]
    });
    fixture = TestBed.createComponent(DailLogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
