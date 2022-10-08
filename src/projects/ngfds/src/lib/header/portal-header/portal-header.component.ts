import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'fds-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PortalHeaderComponent {
  @Input()
  public logo: string | null = null;
  
  @Input("portal-name")
  public portalName: string | null = null;
  
  @Input()
  public username: string | null = null;
  
  @Input("button-text")
  public buttonText: string = 'Log af';
  
  @Output()
  public logout: EventEmitter<Event> = new EventEmitter();

  triggerLogout(ev: Event): void {
    this.logout.emit(ev);
  }
}
