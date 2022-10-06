import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-back-button',
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent {
  @Input()
  public link: string | null = null;
}
