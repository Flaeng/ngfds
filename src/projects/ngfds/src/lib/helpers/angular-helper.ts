import { EventEmitter } from '@angular/core';

export class AngularHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static emitEvent<T>(emitter: EventEmitter<T>, ev: Event, ext: any): void {
    const newEvent: T = { ...ev, ...ext };
    emitter.emit(newEvent);
  }
}
