import { EventEmitter, InjectionToken } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

type NgProvide<T> = {
  provide: InjectionToken<readonly ControlValueAccessor[]>;
  multi: boolean;
  useExisting: T;
};

export class AngularHelper {
  static formInput<T>(type: T): [NgProvide<T>, NgProvide<T>] {
    return [
      this.multiProvide(NG_VALUE_ACCESSOR, type),
      this.multiProvide(NG_VALIDATORS, type),
    ];
  }

  static multiProvide<T>(
    provide: InjectionToken<readonly ControlValueAccessor[]>,
    type: T
  ): NgProvide<T> {
    return {
      provide,
      multi: true,
      useExisting: type,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static emitEvent<T>(emitter: EventEmitter<T>, ev: Event, ext: any): void {
    const newEvent: T = { ...ev, ...ext };
    emitter.emit(newEvent);
  }
}
