import { Component } from '@angular/core';
import { FdsToastService } from 'projects/ngfds/src/public-api';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-toast-page',
  templateUrl: './toast-page.component.g.html',
})
export class ToastPageComponent extends BasePageComponent {
  constructor(public toastService: FdsToastService) {
    super();
  }
}
