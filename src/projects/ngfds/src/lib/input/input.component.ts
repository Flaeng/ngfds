import { Component, ElementRef, Input, OnInit, Optional, ViewChild } from '@angular/core';
import * as DKFDS from 'dkfds';
import { FormFieldComponent } from '../form-field/public-api';
import { AngularHelper } from '../helpers/angular-helper';
import { DkfdsHelper } from '../helpers/dkfds-helper';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-input',
  templateUrl: './input.component.html',
  providers: [...AngularHelper.formInput(InputComponent)],
})
export class InputComponent extends NgModelComponent<string> implements OnInit {
  @Input()
  public disabled: boolean = false;

  @Input()
  public readonly: boolean = false;

  @Input()
  public placeholder: string = '';

  @Input()
  public type: string = 'text';

  @Input()
  public size:
    | 'width-xxs'
    | 'width-xs'
    | 'width-s'
    | 'width-m'
    | 'width-l'
    | 'width-xl'
    | 'char-4'
    | 'char-8'
    | 'char-11'
    | 'char-27'
    | null = null;

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

  ngOnInit():void {
    super.onInit();
  }

  setValue(obj: string): void {
    this.value = obj;
  }

  ngAfterViewInit(): void {
    // this.autoExpandIfSet();

    if (!this.formControlWrapper) return;
    if (this.showCharacterLimit === true) {
      this.setupUnderlayingControl();
    }
  }

  private setupUnderlayingControl() {
    if (this.underlayingControl !== null) return;
    if (!this.formControlWrapper) return;
    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.CharacterLimit,
      this.formControlWrapper
    );
  }
}
