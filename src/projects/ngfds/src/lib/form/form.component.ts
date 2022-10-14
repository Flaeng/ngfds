import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormErrorMessageComponent } from '../form-field/public-api';

@Component({
  selector: 'fds-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  _errorMessageList: FormErrorMessageComponent[] = [];
  _errorMessages: Subject<FormErrorMessageComponent[]> = new BehaviorSubject<
    FormErrorMessageComponent[]
  >([]);
  get errorMessages(): Observable<FormErrorMessageComponent[]> {
    return this._errorMessages;
  }

  register(comp: FormErrorMessageComponent) {
    this._errorMessageList.push(comp);
    this._errorMessages.next(this._errorMessageList);
  }

  deregister(comp: FormErrorMessageComponent) {
    const index = this._errorMessageList.indexOf(comp);
    if (index !== -1) {
      this._errorMessageList.splice(index, 1);
      this._errorMessages.next(this._errorMessageList);
    }
  }
}
