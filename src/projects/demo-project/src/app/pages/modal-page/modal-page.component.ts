import { Component } from '@angular/core';
import { ModalService } from 'projects/dkfds-angular-components/src/lib/modal/public-api';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.g.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent extends BasePageComponent {
  constructor(public modalService: ModalService) {
    super();
  }
}
