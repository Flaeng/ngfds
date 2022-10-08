import { ElementRef } from '@angular/core';
import { DKFDSElementDependentInitiable } from 'dkfds';

export class DkfdsHelper {
    static createAndInit<T extends DKFDSElementDependentInitiable>(
        constructor: new (elem: HTMLElement) => T,
        elem: ElementRef
    ): T {
        const result = new constructor(elem.nativeElement);
        result.init();
        return result;
    }
}
