import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdsComponentsComponent } from './fds-components.component';

describe('FdsComponentsComponent', () => {
  let component: FdsComponentsComponent;
  let fixture: ComponentFixture<FdsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
