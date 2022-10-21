import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { OverflowWrapperComponent } from '../overflow-wrapper/overflow-wrapper.component';

@Component({
  selector: 'fds-overflow-button',
  templateUrl: './overflow-button.component.html',
})
export class OverflowButtonComponent implements AfterViewInit, OnDestroy {
  overflowMenuId: string;

  @ViewChild('dropdownTrigger')
  dropdownTrigger: ElementRef<HTMLButtonElement> | null = null;

  constructor(private wrapper: OverflowWrapperComponent) {
    this.overflowMenuId = this.wrapper.id;
  }

  ngAfterViewInit(): void {
    if (!this.dropdownTrigger) return;
    this.wrapper.registerButton(this.dropdownTrigger);
  }

  ngOnDestroy(): void {
    this.wrapper.unregisterButton();
  }
}
