import { InjectionToken } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export class AngularHelper {
  static ngValue<T>(type: T): {
    provide: InjectionToken<readonly ControlValueAccessor[]>;
    multi: boolean;
    useExisting: T;
  } {
    return {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: type,
    };
  }
  static ngValidators<T>(type: T): {
    provide: InjectionToken<readonly ControlValueAccessor[]>;
    multi: boolean;
    useExisting: T;
  } {
    return {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: type,
    };
  }
}
