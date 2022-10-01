import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-page',
  templateUrl: './pagination-page.component.g.html',
  styleUrls: ['./pagination-page.component.scss'],
})
export class PaginationPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
