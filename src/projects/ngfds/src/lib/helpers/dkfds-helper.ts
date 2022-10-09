import { ElementRef } from '@angular/core';
import { DKFDSElementDependentInitiable } from 'dkfds';

export class DkfdsHelper {
  static createAndInit<T extends DKFDSElementDependentInitiable>(
    constructor: new (elem: HTMLElement) => T,
    elem: ElementRef | HTMLElement
  ): T {
    const _elem = elem instanceof ElementRef ? elem.nativeElement : elem;
    const result = new constructor(_elem);
    result.init();
    return result;
  }
}
