import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickHelper } from '../../../helpers/click-helper';

@Component({
  selector: 'fds-portal-header-mobile',
  templateUrl: './portal-header-mobile.component.html',
  styleUrls: ['./portal-header-mobile.component.css'],
})
export class PortalHeaderMobileComponent {
  @Input()
  public username: string | null = null;

  @Input('button-text')
  public buttonText: string = 'Log af';

  @Output()
  public logout: EventEmitter<Event> = new EventEmitter();

  triggerLogout(ev: Event): void {
    ClickHelper.preventDefaultAndEmit(ev, this.logout);
  }
}
