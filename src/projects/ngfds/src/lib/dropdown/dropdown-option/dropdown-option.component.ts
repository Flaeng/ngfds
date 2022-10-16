import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { DropdownComponent } from '../dropdown.component';

@Component({
  selector: 'fds-option',
  templateUrl: './dropdown-option.component.html',
})
export class DropdownOptionComponent implements OnInit, OnDestroy {

  private _value: unknown | null = null;
  @Input()
  public get value(): unknown | null {
    return this._value ?? this.text;
  }
  public set value(value: unknown | null) {
    this._value = value;
  }

  public get text(): string {
    return this.el.nativeElement.innerText;
  }

  constructor(
    public el: ElementRef,
    @Optional() protected parent: DropdownComponent) { }

  ngOnInit(): void {
    this.parent?.registerOption(this);
  }

  ngOnDestroy(): void {
    this.parent?.unregisterOption(this);
  }
}
