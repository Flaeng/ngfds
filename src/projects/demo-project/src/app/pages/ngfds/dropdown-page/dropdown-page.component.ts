import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfds-dropdown-page',
  templateUrl: './dropdown-page.component.g.html',
})
export class NgfdsDropdownPageComponent {
  dropdown1: unknown;
  dropdown2: unknown;
  dropdown3: unknown;
  alert(message: string): void {
    window.alert(message);
  }
}
