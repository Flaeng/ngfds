import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.g.html',
  styleUrls: ['./dropdown-page.component.scss'],
})
export class DropdownPageComponent {
  dropdown1: any;
  dropdown2: any;
  dropdown3: any;
  dropdown4: any;
  alert(message: string): void {
    window.alert(message);
  }
}
