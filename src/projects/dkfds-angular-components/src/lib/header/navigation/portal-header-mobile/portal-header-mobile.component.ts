import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    ev.preventDefault();
    ev.stopPropagation();
    this.logout.emit(ev);
  }
}
