import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as DKFDS from 'dkfds';
import { FormFieldComponent } from '../form-field/form-field.component';
import { InputSize } from '../models/input-sizes';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-input',
  templateUrl: './input.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => InputComponent) },
  ]
})
export class InputComponent
  extends NgModelComponent<string>
  implements OnInit, AfterViewInit, OnChanges
{
  @Input()
  public disabled: boolean = false;

  @Input()
  public readonly: boolean = false;

  @Input()
  public placeholder: string = '';

  @Input()
  public type: string = 'text';

  @Input()
  public size: InputSize | null = null;

  @Input()
  public prefix: string | null = null;

  @Input()
  public suffix: string | null = null;

  @Input()
  public maxlength: number | null = null;

  @Input('show-character-limit')
  public showCharacterLimit: boolean = false;

  @Input()
  public name: string = '';

  _value: string = '';
  @Input()
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
    super.emitChanges(value);
  }

  underlayingControl: DKFDS.CharacterLimit | null = null;

  @ViewChild('formControlWrapper')
  formControlWrapper: ElementRef<HTMLDivElement> | undefined;

  constructor(@Optional() formField: FormFieldComponent | null) {
    super(formField);
  }

  ngOnInit(): void {
    super.onInit();
  }

  setValue(obj: string): void {
    this.value = obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    super.handleChangesForCharacterLimit(this);
  }

  ngAfterViewInit(): void {
    super.trySetupCharacterLimit(this);
  }
}
