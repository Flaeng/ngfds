import { Component } from '@angular/core';

@Component({
  selector: 'app-language-picker-page',
  templateUrl: './language-picker-page.component.g.html',
  styleUrls: ['./language-picker-page.component.scss'],
})
export class LanguagePickerPageComponent {
  alert(message: string): void {
    window.alert(message);
  }
}
