import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-page',
  templateUrl: './textarea-page.component.g.html',
  styleUrls: ['./textarea-page.component.scss'],
})
export class TextareaPageComponent {
  value1: any;
  value2: any;
  showCharacterLimit: boolean = true;
}
