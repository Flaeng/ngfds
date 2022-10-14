import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormErrorMessageComponent } from '../../form-field/public-api';
import { FormComponent } from '../form.component';

@Component({
  selector: 'fds-form-error-summary',
  templateUrl: './form-error-summary.component.html',
})
export class FormErrorSummaryComponent implements OnInit, OnDestroy {
  id: string | null = null;

  errorMessages: FormErrorMessageComponent[] = [];

  subscriptions: Subscription[] = [];

  constructor(protected form: FormComponent) {}

  scrollTo(ev: Event, comp: FormErrorMessageComponent): void {
    ev.preventDefault();
    const elem = document.querySelector(`#label_${comp.id?.split('_')[0]}`);
    elem?.scrollIntoView();
  }

  ngOnInit(): void {
    const sub = this.form.errorMessages.subscribe(
      (x) => (this.errorMessages = x)
    );
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
