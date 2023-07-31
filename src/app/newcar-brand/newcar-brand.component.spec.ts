import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcarBrandComponent } from './newcar-brand.component';

describe('NewcarBrandComponent', () => {
  let component: NewcarBrandComponent;
  let fixture: ComponentFixture<NewcarBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcarBrandComponent]
    });
    fixture = TestBed.createComponent(NewcarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
