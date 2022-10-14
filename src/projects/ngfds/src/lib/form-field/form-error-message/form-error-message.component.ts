import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { FormFieldComponent } from '../form-field.component';

@Component({
  selector: 'fds-form-error-message',
  templateUrl: './form-error-message.component.html',
})
export class FormErrorMessageComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  id: string | null = null;
  text: string | null = null;

  @ViewChild('content')
  content: ElementRef<HTMLElement> | null = null;

  constructor(
    @Optional() protected form: FormComponent | null,
    @Optional() protected formField: FormFieldComponent | null
  ) {}

  ngAfterViewChecked(): void {
    this.text = this.content?.nativeElement.innerText ?? null;
  }

  ngOnInit(): void {
    this.form?.register(this);
    this.id = this.formField?.register(this) ?? null;
  }

  ngOnDestroy(): void {
    this.form?.deregister(this);
    this.formField?.deregister(this);
  }
}
