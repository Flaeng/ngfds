import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfdsDropdownOptionComponent } from './dropdown-option.component';

describe('DropdownOptionComponent', () => {
  let component: NgfdsDropdownOptionComponent;
  let fixture: ComponentFixture<NgfdsDropdownOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfdsDropdownOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgfdsDropdownOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
