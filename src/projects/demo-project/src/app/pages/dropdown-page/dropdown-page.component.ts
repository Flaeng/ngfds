import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.g.html',
  styleUrls: ['./dropdown-page.component.scss'],
})
export class DropdownPageComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown1: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown2: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown3: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdown4: any;
  alert(message: string): void {
    window.alert(message);
  }
}
