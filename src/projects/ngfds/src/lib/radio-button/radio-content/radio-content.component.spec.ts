import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioContentComponent } from './radio-content.component';

describe('RadioContentComponent', () => {
  let component: RadioContentComponent;
  let fixture: ComponentFixture<RadioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
