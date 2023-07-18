import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormappComponent } from './formapp.component';

describe('FormappComponent', () => {
  let component: FormappComponent;
  let fixture: ComponentFixture<FormappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormappComponent]
    });
    fixture = TestBed.createComponent(FormappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
