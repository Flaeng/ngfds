declare namespace DKFDS {
  class DKFDSElementDependent {
      constructor(elem: HTMLElement);
  }
    
  class DKFDSElementDependentInitiable extends DKFDSElementDependent {
      init(): void;
  }
  
  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/accordion.js
  export class Accordion extends DKFDSElementDependentInitiable {
    bulkEvent(): void;
    eventOnClick(): void;
    toggleButton(button: HTMLButtonElement, expanded: boolean | null | undefined, bulk: boolean): boolean;
  }
  
  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/alert.js
  export class Alert extends DKFDSElementDependentInitiable {
    hide(): void;
    show(): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/back-to-top.js
  export class BackToTop extends DKFDSElementDependentInitiable { }
  
  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/character-limit.js
  export class CharacterLimit extends DKFDSElementDependentInitiable {
    charactersLeft(): number;
    updateVisibleMessage(): void;
    updateScreenReaderMessage(): void;
    resetScreenReaderMessage(): void;
    updateMessages(ev: Event): void;
    handleKeyUp(ev: Event): void;
    handleFocus(ev: Event): void;
    handleBlur(ev: Event): void;
  } 

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/checkbox-toggle-content.js
  export class CheckboxToggleContent extends DKFDSElementDependentInitiable {
    toggle(): void;
    expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;
    collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;
  }
  
  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/date-picker.js
  export class datePicker {
    static init(elem: HTMLElement): void;
    static on(documentBody: HTMLElement): void;
    static getDatePickerContext(elem: HTMLElement): DatePickerContext;
    static disable(elem: HTMLElement): void;
    static enable(elem: HTMLElement): void;
    static isDateInputInvalid(elem: HTMLElement): boolean;
    static setCalendarValue(elem: HTMLElement, dateString: string): void;
    static validateDateInput(elem: HTMLElement): void;
    static renderCalendar(elem: HTMLElement, dateToDisplay: Date | null | undefined): void;
    static updateCalendarIfVisible(elem: HTMLElement): void;
  }

  export class DatePickerContext {
    get calendarDate(): Date;
    get minDate(): Date;
    get toggleBtnEl(): HTMLButtonElement;
    get selectedDate(): Date;
    get maxDate(): Date;
    get firstYearChunkEl(): HTMLElement;
    get datePickerEl(): HTMLElement;
    get inputDate(): Date;
    get internalInputEl(): HTMLInputElement;
    get externalInputEl(): HTMLInputElement;
    get calendarEl(): HTMLElement;
    get rangeDate(): Date;
    get defaultDate(): Date;
    get statusEl(): HTMLElement;
  }
  
  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/dropdown-sort.js
  export class DropdownSort extends DKFDSElementDependentInitiable {
    updateSelectedValue(): void;
    onOptionClick(): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/dropdown.js
  export class Dropdown extends DKFDSElementDependentInitiable {
    hide(): void;
    show(): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/error-summary.js
  export class ErrorSummary extends DKFDSElementDependentInitiable {
    handleClick(ev: Event): void;
    focusTarget(target: HTMLElement): boolean;
    getFragmentFromUrl(url: string): string;
    getAssociatedLegendOrLabel(input: HTMLElement): HTMLElement;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/modal.js
  export class Modal extends DKFDSElementDependentInitiable {
    show(ev: Event): void;
    hide(): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/navigation.js
  export class Navigation {
    constructor();
    init(): void;
    teardown(): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/radio-toggle-content.js
  export class RadioToggleGroup extends DKFDSElementDependentInitiable {
    toggle(radioInputElement: HTMLInputElement): void;
    expand(radioInputElement: HTMLInputElement, contentElement: HTMLElement): void;
    collapse(radioInputElement: HTMLInputElement, contentElement: HTMLElement): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/regex-input-mask.js
  export class InputRegexMask {
    constructor(element: HTMLElement);
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/selectable-table.js
  export class TableSelectableRows extends DKFDSElementDependentInitiable {
    constructor(elem: HTMLElement, strings: { select_row: string, unselect_row: string, select_all_rows: string, unselect_all_rows: string});
    getGroupCheckbox(): HTMLElement | false;
    getCheckboxList(): HTMLElement | null | undefined;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/table.js
  export class ResponsiveTable extends DKFDSElementDependent {}

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/tabnav.js
  export class Tabnav extends DKFDSElementDependentInitiable {
    activateTab(tab: HTMLButtonElement, setFocus: boolean): void;
  }

  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/toast.js
  export class Toast extends DKFDSElementDependent {
    show(): void;
    hide(): void;
  }
  
  // https://github.com/detfaellesdesignsystem/dkfds-components/blob/master/src/js/components/tooltip.js
  export class Tooltip extends DKFDSElementDependentInitiable {}

  export function init(): void;
}

export = DKFDS;