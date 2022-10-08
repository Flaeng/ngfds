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
    return this.provide(NG_VALUE_ACCESSOR, type);
  }

  static ngValidators<T>(type: T): {
    provide: InjectionToken<readonly ControlValueAccessor[]>;
    multi: boolean;
    useExisting: T;
  } {
    return this.provide(NG_VALIDATORS, type);
  }

  static provide<T>(
    provide: InjectionToken<readonly ControlValueAccessor[]>,
    type: T
  ): {
    provide: InjectionToken<readonly ControlValueAccessor[]>;
    multi: boolean;
    useExisting: T;
  } {
    return {
      provide,
      multi: true,
      useExisting: type,
    };
  }
}
