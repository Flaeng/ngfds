import { Component, Input, Optional } from '@angular/core';
import { FdsModalRef } from 'projects/ngfds/src/public-api';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'fds-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent {
  @Input('hide-close')
  public hideClose: boolean = false;

  @Input()
  public header: string | null = null;

  constructor(@Optional() private modalRef: FdsModalRef | null) {
    this.hideClose = this.modalRef === null || this.modalRef.forceAction === true;
  }

  public closeModal(): void {
    this.modalRef?.dismiss(null);
  }
}
