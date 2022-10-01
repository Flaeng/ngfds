import { Component } from '@angular/core';

@Component({
  selector: 'app-structured-list-page',
  templateUrl: './structured-list-page.component.g.html',
  styleUrls: ['./structured-list-page.component.scss'],
})
export class StructuredListPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
