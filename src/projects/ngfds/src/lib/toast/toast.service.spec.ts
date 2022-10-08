import { TestBed } from '@angular/core/testing';

import {
  FdsToastService,
  FDS_TOAST_OPTIONS,
  IGlobalToastOptions,
} from './toast.service';

describe('ToastService', () => {
  let service: FdsToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: FDS_TOAST_OPTIONS,
          useValue: {
            newToastPosition: 'bottom',
          } as IGlobalToastOptions,
        },
      ],
    });
    service = TestBed.inject(FdsToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
