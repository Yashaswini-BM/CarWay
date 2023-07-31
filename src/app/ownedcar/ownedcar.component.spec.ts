import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedcarComponent } from './ownedcar.component';

describe('OwnedcarComponent', () => {
  let component: OwnedcarComponent;
  let fixture: ComponentFixture<OwnedcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnedcarComponent]
    });
    fixture = TestBed.createComponent(OwnedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
