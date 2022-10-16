import { Component } from '@angular/core';
import { FdsModalRef } from 'projects/ngfds/src/public-api';

@Component({
  selector: 'app-modal-example1',
  templateUrl: './modal-example1.component.g.html',
})
export class ModalExample1Component {
  modalInstance: FdsModalRef | null = null;
}
