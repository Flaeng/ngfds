import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RadioButtonSize, RadioGroupComponent } from './public-api';

@Component({
  selector: 'fds-radio-button',
  templateUrl: './radio-button.component.html',
})
export class RadioButtonComponent implements OnDestroy {
  static idGenerator = 1;
  id: string = 'radiobutton' + (RadioButtonComponent.idGenerator++).toString();

  groupName: string;

  private _size: RadioButtonSize | null = null;
  private _parentSize: RadioButtonSize;
  @Input()
  public get size(): RadioButtonSize | null {
    return this._size ?? this._parentSize;
  }
  public set size(value: RadioButtonSize | null) {
    this._size = value;
  }

  @Input()
  public value: unknown | null = null;

  @Input()
  public label: string | null = null;

  @Input()
  public hint: string | null = null;

  @Input()
  public content: string | null = null;

  subscriptions: Subscription[] = [];

  constructor(protected radioGroup: RadioGroupComponent) {
    this.groupName = radioGroup.groupName;
    this._parentSize = radioGroup.radioButtonSize;
    const sub = radioGroup.$radioButtonSize.subscribe(
      (x) => (this._parentSize = x)
    );
    this.subscriptions.push(sub);
  }

  didChange(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    if (target && target.value) {
      this.radioGroup.value = this.value;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
