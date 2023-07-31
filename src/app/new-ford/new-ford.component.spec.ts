import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFordComponent } from './new-ford.component';

describe('NewFordComponent', () => {
  let component: NewFordComponent;
  let fixture: ComponentFixture<NewFordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFordComponent]
    });
    fixture = TestBed.createComponent(NewFordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
