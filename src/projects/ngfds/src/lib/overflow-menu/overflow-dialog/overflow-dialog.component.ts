import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { OverflowWrapperComponent } from '../overflow-wrapper/overflow-wrapper.component';

@Component({
  selector: 'fds-overflow-dialog',
  templateUrl: './overflow-dialog.component.html',
})
export class OverflowDialogComponent implements AfterViewInit, OnDestroy {
  overflowMenuId: string;

  @ViewChild('overflowDialog')
  overflowDialog: ElementRef<HTMLDivElement> | null = null;

  constructor(private wrapper: OverflowWrapperComponent) {
    this.overflowMenuId = this.wrapper.id;
  }

  ngAfterViewInit(): void {
    if (!this.overflowDialog) return;
    this.wrapper.registerOverflowMenu(this.overflowDialog);
  }

  ngOnDestroy(): void {
    this.wrapper.unregisterOverflowMenu();
  }
}
