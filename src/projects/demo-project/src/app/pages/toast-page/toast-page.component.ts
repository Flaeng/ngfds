import { Component } from '@angular/core';
import { FdsToastService } from 'projects/dkfds-angular-components/src/lib/toast/toast.service';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-toast-page',
  templateUrl: './toast-page.component.g.html',
  styleUrls: ['./toast-page.component.scss'],
})
export class ToastPageComponent extends BasePageComponent {
  constructor(public toastService: FdsToastService) {
    super();
  }
}
