import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.g.html',
})
export class DropdownPageComponent {
  dropdown1: unknown;
  dropdown2: unknown;
  dropdown3: unknown;
  dropdown4: unknown;
  alert(message: string): void {
    window.alert(message);
  }
}
