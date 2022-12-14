import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
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
  selector: 'fds-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => TextareaComponent) },
  ]
})
export class TextareaComponent
  extends NgModelComponent<string>
  implements AfterViewInit, OnChanges
{
  // @Input('auto-expand')
  // public autoExpand: boolean = false;

  @Input()
  public rows: number = 5;

  @Input()
  public name: string = '';

  @Input()
  public size: InputSize | null = null;

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
    super.emitChanges(value);
  }

  static idGenerator = 1;

  id: string = (TextareaComponent.idGenerator++).toString();

  @ViewChild('formControlWrapper')
  formControlWrapper: ElementRef<HTMLDivElement> | undefined;

  @ViewChild('formControl')
  formControl: ElementRef<HTMLTextAreaElement> | undefined;

  underlayingControl: DKFDS.CharacterLimit | null = null;

  constructor(@Optional() formField: FormFieldComponent) {
    super(formField);
  }

  ngAfterViewInit(): void {
    // this.autoExpandIfSet();
    super.trySetupCharacterLimit(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    super.handleChangesForCharacterLimit(this);
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

  setValue(obj: string): void {
    this.value = obj;
  }
}
