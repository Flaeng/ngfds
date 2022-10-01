import { Component } from '@angular/core';

@Component({
  selector: 'app-context-menu-page',
  templateUrl: './context-menu-page.component.g.html',
  styleUrls: ['./context-menu-page.component.scss'],
})
export class ContextMenuPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
