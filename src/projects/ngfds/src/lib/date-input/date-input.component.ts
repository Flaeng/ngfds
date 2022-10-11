import { AfterViewInit, Component, Input } from '@angular/core';
import * as DKFDS from 'dkfds';
import { AngularHelper } from '../helpers/angular-helper';
import { DateHelper } from '../helpers/date-helper';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-date-input',
  templateUrl: './date-input.component.html',
  providers: [...AngularHelper.formInput(DateInputComponent)],
})
export class DateInputComponent extends NgModelComponent<Date | null> implements AfterViewInit
{
  _dayOfMonth: string = '';
  get dayOfMonth(): string {
    return this._dayOfMonth;
  }
  set dayOfMonth(value: string) {
    this._dayOfMonth = value;
    super.emitChanges(this.value);
  }

  _month: string = '';
  get month(): string {
    return this._month;
  }
  set month(value: string) {
    this._month = value;
    super.emitChanges(this.value);
  }

  _year: string = '';
  get year(): string {
    return this._year;
  }
  set year(value: string) {
    this._year = value;
    super.emitChanges(this.value);
  }

  set value(val: Date | null) {
    if (val != null) {
      this._dayOfMonth = val.getDate().toString();
      this._month = (val.getMonth() + 1).toString();
      this._year = val.getFullYear().toString();
    } else this._dayOfMonth = this._month = this._year = '';
    super.emitChanges(val);
  }
  get value(): Date | null {
    return this._dayOfMonth.length === 0 ||
      this._month.length === 0 ||
      this._year.length === 0
      ? null
      : DateHelper.parseDate(
          parseInt(this._dayOfMonth, 10),
          parseInt(this._month, 10),
          parseInt(this._year, 10)
        );
  }

  @Input()
  public disabled: boolean = false;

  setValue(obj: Date | null): void {
    this.value = obj;
  }

  ngAfterViewInit(): void {
    DKFDS.init();
  }
}
