import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.g.html',
})
export class DropdownPageComponent {

  demoFormGroup = new FormGroup(
    {
      optionalSelector: new FormControl(null),
      requiredSelector: new FormControl(null, Validators.required),
    }
  );

  dropdown1: unknown;
  dropdown2: unknown;
  dropdown3: unknown;
  dropdown4: unknown;
  alert(message: string): void {
    window.alert(message);
  }
}
