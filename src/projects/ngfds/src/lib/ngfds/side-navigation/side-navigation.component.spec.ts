import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfdsSideNavigationComponent } from './side-navigation.component';

describe('NgfdsSideNavigationComponent', () => {
  let component: NgfdsSideNavigationComponent;
  let fixture: ComponentFixture<NgfdsSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfdsSideNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgfdsSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
