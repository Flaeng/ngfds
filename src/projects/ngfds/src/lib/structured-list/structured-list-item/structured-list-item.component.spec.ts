import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredListItemComponent } from './structured-list-item.component';

describe('StructuredListItemComponent', () => {
  let component: StructuredListItemComponent;
  let fixture: ComponentFixture<StructuredListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
