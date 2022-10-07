import { EventEmitter } from '@angular/core';

export class ClickHelper {
  static preventDefaultAndEmit(ev: Event, emitter: EventEmitter<Event>): void {
    ev.preventDefault();
    ev.stopPropagation();
    emitter.emit(ev);
  }
}
