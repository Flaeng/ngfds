import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.g.html',
  styleUrls: ['./alert-page.component.scss'],
})
export class AlertPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
