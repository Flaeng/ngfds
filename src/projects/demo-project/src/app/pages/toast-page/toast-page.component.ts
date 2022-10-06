import { Component } from '@angular/core';
import { FdsToastService } from 'projects/ngfds/src/lib/toast/toast.service';
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
