import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { FdsModalRef } from '../modal.service';

import { ModalHeaderComponent } from './modal-header.component';

describe('ModalHeaderComponent', () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalHeaderComponent],
      providers: [
        {
          provide: FdsModalRef,
          useValue: {
            forceAction: false,
            closed: false,
            closeResult: null as unknown | null,
            dismissed: false,
            dismissReason: null as unknown | null,
            close(result: unknown): void {
              this.closed = true;
              this.closeResult = result;
            },
            dismiss(reason: unknown): void {
              this.dismissed = true;
              this.dismissReason = reason;
            },
            onResult(): Observable<unknown> {
              return of(null);
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
