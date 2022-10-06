declare namespace DKFDS {
  class DKFDSElementDependent {
      constructor(elem: HTMLElement);
  }
    
  class DKFDSElementDependentInitiable extends DKFDSElementDependent {
      init(): void;
  }
  export class Accordion extends DKFDSElementDependentInitiable {}
  export class Alert extends DKFDSElementDependentInitiable {}
  export class Dropdown extends DKFDSElementDependentInitiable {}
  export class Tabnav extends DKFDSElementDependentInitiable {}
  export class Tooltip extends DKFDSElementDependentInitiable {}

  export class datePicker {
    static init(elem: HTMLElement): void;
  }

  export class Navigation {
    constructor();
    init(): void;
  }

  export class Toast extends DKFDSElementDependent {
    show(): void;
    hide(): void;
  }

  export class CheckboxToggleContent {}

  export function init(): void;
}

export = DKFDS;