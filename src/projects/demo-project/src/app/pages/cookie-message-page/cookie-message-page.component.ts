import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-message-page',
  templateUrl: './cookie-message-page.component.g.html',
  styleUrls: ['./cookie-message-page.component.scss']
})
export class CookieMessagePageComponent {

  alert(message: string): void {
    window.alert(message);
  }

}
