import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { map, Observable } from 'rxjs';
import { DkfdsHelper } from '../helpers/dkfds-helper';
import {
  AlertDictionary,
  FDS_LOCALIZATION,
  Localization,
  LocalizationService,
} from '../localization';

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

  public alert: DKFDS.Alert | null = null;

  dictionary: Observable<AlertDictionary>;

  constructor(protected localization: LocalizationService) {
    this.dictionary = this.localization.Dictionary.pipe(map((x) => x.alert!));
  }

  ngAfterViewInit(): void {
    this.alert = DkfdsHelper.createAndInit(DKFDS.Alert, this.el);
  }

  hasRoleAlert(): boolean {
    return this.type === 'warning' || this.type === 'error';
  }

  onClose(ev: Event): void {
    this.close.emit(ev);
  }
}
