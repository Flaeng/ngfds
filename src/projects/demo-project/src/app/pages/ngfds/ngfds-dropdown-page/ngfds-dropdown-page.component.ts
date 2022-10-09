import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfds-dropdown-page',
  templateUrl: './ngfds-dropdown-page.component.g.html',
  styleUrls: ['./ngfds-dropdown-page.component.scss'],
})
export class NgfdsDropdownPageComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown1: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown2: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown3: any;
  alert(message: string): void {
    window.alert(message);
  }
}
