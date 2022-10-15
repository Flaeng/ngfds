import { Component } from '@angular/core';
import { FdsModalService } from 'projects/ngfds/src/lib/modal/public-api';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.g.html',
})
export class ModalPageComponent extends BasePageComponent {
  constructor(public modalService: FdsModalService) {
    super();
  }
}
