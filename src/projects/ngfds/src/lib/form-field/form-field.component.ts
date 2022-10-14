import { Component, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';

@Component({
  selector: 'fds-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @Input('has-error')
  public hasError: boolean | 'auto' = 'auto';

  @Input('label')
  public label: string | null = null;

  @Input('hint')
  public hint: string | null = null;
  get hasHint(): boolean {
    return this.hint !== null;
  }

  errorMessageList: FormErrorMessageComponent[] = [];
  formControlDescribedBy: Subject<string> = new BehaviorSubject('');

  static idGenerator = 1;
  fieldName: string =
    'formField' + (FormFieldComponent.idGenerator++).toString();

  errorMessageIdGenerator = 1;

  register(comp: FormErrorMessageComponent): string {
    this.errorMessageList.push(comp);
    const newId = `${this.fieldName}_${this.errorMessageIdGenerator++}`;
    this.publishFormControlDescribedBy(newId);
    return newId;
  }

  publishFormControlDescribedBy(newId?: string): void {
    const existingIds = this.errorMessageList.map((x) => x.id);
    const newList = newId ? [...existingIds, newId] : existingIds;
    const fcDescribedBy = newList.join(' ');
    this.formControlDescribedBy.next(fcDescribedBy);
  }

  deregister(comp: FormErrorMessageComponent): void {
    const index = this.errorMessageList.indexOf(comp);
    if (index !== -1) this.errorMessageList.splice(index, 1);
    this.publishFormControlDescribedBy();
  }
}
