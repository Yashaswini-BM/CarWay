import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHyundaiComponent } from './new-hyundai.component';

describe('NewHyundaiComponent', () => {
  let component: NewHyundaiComponent;
  let fixture: ComponentFixture<NewHyundaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHyundaiComponent]
    });
    fixture = TestBed.createComponent(NewHyundaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
