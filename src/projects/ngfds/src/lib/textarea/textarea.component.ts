import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import * as DKFDS from 'dkfds';
import { AngularHelper } from '../helpers/angular-helper';
import { DkfdsHelper } from '../helpers/dkfds-helper';

@Component({
  selector: 'fds-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [...AngularHelper.formInput(TextareaComponent)],
})
export class TextareaComponent
  implements AfterViewInit, OnChanges, ControlValueAccessor, Validator
{
  // @Input('auto-expand')
  // public autoExpand: boolean = false;

  @Input()
  public rows: number = 5;

  @Input()
  public disabled: boolean = false;

  @Input()
  public maxlength: number | null = null;

  @Input('show-character-limit')
  public showCharacterLimit: boolean = false;

  _value: string = '';
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
    this.onChange?.call(this, value);
    this.onTouched?.call(this);
  }

  static idGenerator = 1;

  id: string = (TextareaComponent.idGenerator++).toString();

  @ViewChild('formControlWrapper')
  formControlWrapper: ElementRef<HTMLDivElement> | undefined;

  @ViewChild('formControl')
  formControl: ElementRef<HTMLTextAreaElement> | undefined;

  underlayingControl: DKFDS.CharacterLimit | null = null;

  ngAfterViewInit(): void {
    // this.autoExpandIfSet();

    if (!this.formControlWrapper) return;
    if (this.showCharacterLimit === true) {
      this.setupUnderlayingControl();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (this.showCharacterLimit === true) {
      this.setupUnderlayingControl();
    } else if (this.underlayingControl !== null) {
      this.underlayingControl = null;
    }
  }

  // private autoExpandIfSet() {
  //   if (!this.formControl) return;
  //   const ctrl = this.formControl.nativeElement;
  //   const offset = ctrl.offsetHeight - ctrl.clientHeight;
  //   ctrl.addEventListener('input', () => {
  //     if (this.autoExpand) {
  //       ctrl.style.height = 'auto';
  //       ctrl.style.height = ctrl.scrollHeight + offset + 'px';
  //     }
  //   });
  // }

  onChange: ((value: string) => void) | null = null;
  onTouched: (() => void) | null = null;
  onValidatorChange: (() => void) | null = null;

  private setupUnderlayingControl() {
    if (this.underlayingControl !== null) return;
    if (!this.formControlWrapper) return;
    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.CharacterLimit,
      this.formControlWrapper
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(obj: any): void {
    this.value = obj;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // #IF angular >= 14
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // #ELSE
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
    // validate(control: AbstractControl): ValidationErrors | null {
    // #ENDIF
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}
