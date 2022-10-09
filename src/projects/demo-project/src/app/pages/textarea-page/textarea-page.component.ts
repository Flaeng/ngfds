import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-page',
  templateUrl: './textarea-page.component.g.html',
  styleUrls: ['./textarea-page.component.scss'],
})
export class TextareaPageComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value1: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value2: any;
  showCharacterLimit: boolean = true;
}
