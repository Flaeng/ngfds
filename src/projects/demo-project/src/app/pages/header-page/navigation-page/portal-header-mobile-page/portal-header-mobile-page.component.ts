import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-header-mobile-page',
  templateUrl: './portal-header-mobile-page.component.g.html',
  styleUrls: ['./portal-header-mobile-page.component.scss'],
})
export class PortalHeaderMobilePageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
