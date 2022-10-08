import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopButtonComponent } from './back-to-top-button.component';

describe('BackToTopButtonComponent', () => {
  let component: BackToTopButtonComponent;
  let fixture: ComponentFixture<BackToTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToTopButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
