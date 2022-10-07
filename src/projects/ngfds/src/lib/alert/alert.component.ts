import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../helpers/dkfds-helper';

@Component({
  selector: 'fds-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements AfterViewInit {
  @Input()
  public header: string | null = null;

  @Input('show-icon')
  public showIcon = false;

  @Input('can-close')
  public canClose = false;

  @Input()
  public type: 'success' | 'info' | 'warning' | 'error' = 'info';

  @Output()
  public close: EventEmitter<Event> = new EventEmitter();

  @ViewChild('alertContainer') el!: ElementRef;

  public alert: DKFDS.Alert | null = null;

  ngAfterViewInit(): void {
    this.alert = DkfdsHelper.createAndInit(DKFDS.Alert, this.el);
  }

  hasRoleAlert(): boolean {
    return this.type == 'warning' || this.type == 'error';
  }

  onClose(ev: Event): void {
    this.close.emit(ev);
  }
}
