import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-page',
  templateUrl: './textarea-page.component.g.html',
})
export class TextareaPageComponent {
  value1: unknown;
  value2: unknown;
  showCharacterLimit: boolean = true;
}
