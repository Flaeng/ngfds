import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfds-dropdown-page',
  templateUrl: './ngfds-dropdown-page.component.g.html',
  styleUrls: ['./ngfds-dropdown-page.component.scss'],
})
export class NgfdsDropdownPageComponent {
  dropdown1: any;
  dropdown2: any;
  dropdown3: any;
  alert(message: string): void {
    window.alert(message);
  }
}
