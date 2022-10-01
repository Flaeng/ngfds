import { Component } from '@angular/core';

@Component({
  selector: 'app-function-links-page',
  templateUrl: './function-links-page.component.g.html',
  styleUrls: ['./function-links-page.component.scss'],
})
export class FunctionLinksPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
