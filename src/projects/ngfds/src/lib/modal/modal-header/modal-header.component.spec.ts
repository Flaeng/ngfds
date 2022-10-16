import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from '../modal.component';

import { ModalHeaderComponent } from './modal-header.component';

describe('ModalHeaderComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalHeaderComponent],
      providers: [
        {
          provide: ModalComponent,
          useValue: {
            isDismissed: false,
            dismiss(value: any): void {
              this.isDismissed = true;
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
