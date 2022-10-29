import { Component, Inject } from '@angular/core';
import { FdsModalRef, FDS_MODAL_DATA } from 'projects/ngfds/src/public-api';

@Component({
  selector: 'app-modal-example1',
  templateUrl: './modal-example1.component.g.html',
})
export class ModalExample1Component {
  constructor(
    public modalInstance: FdsModalRef,
    @Inject(FDS_MODAL_DATA) public user: { username: string } | null
  ) {}
}
