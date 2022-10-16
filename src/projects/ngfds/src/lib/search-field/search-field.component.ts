import {
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { FormFieldComponent } from '../form-field/form-field.component';
import { AngularHelper } from '../helpers/angular-helper';
import { InputSize } from '../models/input-sizes';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-search-field',
  templateUrl: './search-field.component.html',
  providers: [...AngularHelper.formInput(SearchFieldComponent)],
})
export class SearchFieldComponent extends NgModelComponent<string> {
  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  @Input('sr-hint')
  public srHint: string | null = null;

  @Input('sr-button-hint')
  public srButtonHint: string | null = null;

  @Input()
  public size: InputSize = 'char-27';

  @Input('button-text')
  public buttonText: string | null = null;

  @Input('button-icon')
  public buttonIcon: string = 'search';

  _value: string = '';
  @Input()
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
    super.emitChanges(value);
  }

  @Output()
  public search: EventEmitter<SearchEvent> = new EventEmitter();

  constructor(@Optional() formField: FormFieldComponent | null) {
    super(formField);
  }

  emitSearchEvent(ev: Event): void {
    ev.preventDefault();
    AngularHelper.emitEvent(this.search, ev, { query: this.value });
  }

  setValue(obj: string): void {
    this.value = obj;
  }
}

type SearchEvent = Event & { query: string };
