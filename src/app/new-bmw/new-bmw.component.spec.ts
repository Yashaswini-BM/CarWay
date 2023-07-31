import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBmwComponent } from './new-bmw.component';

describe('NewBmwComponent', () => {
  let component: NewBmwComponent;
  let fixture: ComponentFixture<NewBmwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBmwComponent]
    });
    fixture = TestBed.createComponent(NewBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
