import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailComponent } from './avail.component';

describe('AvailComponent', () => {
  let component: AvailComponent;
  let fixture: ComponentFixture<AvailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailComponent]
    });
    fixture = TestBed.createComponent(AvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
