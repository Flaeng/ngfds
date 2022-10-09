import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-switch-page',
  templateUrl: './toggle-switch-page.component.g.html',
  styleUrls: ['./toggle-switch-page.component.scss']
})
export class ToggleSwitchPageComponent {
  value1: boolean = false;
  value2: boolean = true;
}
