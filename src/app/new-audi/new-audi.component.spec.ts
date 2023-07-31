import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAudiComponent } from './new-audi.component';

describe('NewAudiComponent', () => {
  let component: NewAudiComponent;
  let fixture: ComponentFixture<NewAudiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAudiComponent]
    });
    fixture = TestBed.createComponent(NewAudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
