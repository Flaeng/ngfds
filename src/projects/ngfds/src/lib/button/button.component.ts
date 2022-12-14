import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'fds-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() public visual: 'primary' | 'secondary' | 'tertiary' | 'quaternary' = 'primary';

  @Input() public disabled: boolean = false;

  @Input() public type: 'button' | 'submit' | 'reset' = 'button';

  cssClass: Record<string, boolean> = {};

  ngOnInit(): void {
    this.setClass();
  }

  setClass(): void {
    this.cssClass = {};
    this.cssClass[`button-${this.visual}`] = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.setClass();
  }
}
