import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FormComponent } from '../form.component';

import { FormErrorSummaryComponent } from './form-error-summary.component';

describe('FormErrorSummaryComponent', () => {
  let component: FormErrorSummaryComponent;
  let fixture: ComponentFixture<FormErrorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent, FormErrorSummaryComponent],
      providers: [
        {
          provide: FormComponent,
          useValue: {
            errorMessages: of(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormErrorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
