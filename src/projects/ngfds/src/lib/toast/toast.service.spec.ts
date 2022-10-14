import { TestBed } from '@angular/core/testing';

import {
  FdsToastService,
  FDS_TOAST_SETTINGS,
  IToastSettings,
} from './toast.service';

describe('ToastService', () => {
  let service: FdsToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: FDS_TOAST_SETTINGS,
          useValue: {
            newToastPosition: 'bottom',
          } as IToastSettings,
        },
      ],
    });
    service = TestBed.inject(FdsToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
