import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-page',
  templateUrl: './checkbox-page.component.g.html',
  styleUrls: ['./checkbox-page.component.scss'],
})
export class CheckboxPageComponent {
  value1: boolean = false;
  value2: boolean = false;
  value3: boolean = true;
  value4: boolean = true;
  value5: boolean = false;
  value6: boolean = false;
}
