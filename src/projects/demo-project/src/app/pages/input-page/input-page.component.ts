import { Component } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.g.html',
})
export class InputPageComponent {
  text1: string = '';
  text2: string = '';
  text3: string = '';
  text4: string = '';

  number1: number | null = null;
  number2: number | null = null;
  number3: number | null = null;
  number4: number | null = null;
}
