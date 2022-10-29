import { Component } from '@angular/core';

@Component({
  selector: 'app-search-field-page',
  templateUrl: './search-field-page.component.g.html',
})
export class SearchFieldPageComponent {
  copyUrl: string = window.location.href;
  // alert(message: string): void {
  //   window.alert(message);
  // }
  alert = window.alert;
  navigator = window.navigator;
  // async addToClipboard(text: string): Promise<void> {
  //   await navigator.clipboard.writeText(text);
  // }
}
