import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
// @ts-ignore
import DKFDS from 'dkfds';

@Component({
  selector: 'fds-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements AfterViewInit {
  @Input()
  public header: string | null = null;

  @Input('show-icon')
  public showIcon: boolean = false;

  @Input('can-close')
  public canClose: boolean = false;

  @Input()
  public type: 'success' | 'info' | 'warning' | 'error' = 'info';

  @Output()
  public close: EventEmitter<Event> = new EventEmitter();

  @ViewChild('alertContainer') el!: ElementRef;

  private alert: any;

  ngAfterViewInit(): void {
    this.alert = new DKFDS.Alert(this.el.nativeElement);
    this.alert.init();
  }

  hasRoleAlert(): boolean {
    return this.type == 'warning' || this.type == 'error';
  }

  onClose(ev: Event): void {
    this.close.emit(ev);
  }
}
