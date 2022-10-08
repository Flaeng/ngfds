import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fds-cookie-message',
  templateUrl: './cookie-message.component.html',
})
export class CookieMessageComponent {
  @Input()
  public header: string = 'Fortæl os om du accepterer cookies';

  @Input('positive-text')
  public positiveText: string = 'Accepter cookies';

  @Input('negative-text')
  public negativeText: string = 'Nej tak til cookies';

  @Output('positive-click')
  public positiveClick: EventEmitter<Event> = new EventEmitter();

  @Output('negative-click')
  public negativeClick: EventEmitter<Event> = new EventEmitter();

  hideCookieBox = false;

  closeMessageBox(ev: Event, emitter: EventEmitter<Event>): void {
    this.hideCookieBox = true;
    emitter.emit(ev);
  }

  positiveButtonClicked(ev: Event): void {
    this.closeMessageBox(ev, this.positiveClick);
  }

  negativeButtonClicked(ev: Event): void {
    this.closeMessageBox(ev, this.negativeClick);
  }
}
