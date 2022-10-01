import { Component } from '@angular/core';

@Component({
  selector: 'app-overflow-menu-page',
  templateUrl: './overflow-menu-page.component.g.html',
  styleUrls: ['./overflow-menu-page.component.scss'],
})
export class OverflowMenuPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
