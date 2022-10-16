import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'fds-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent {
  @Input('hide-close')
  public hideClose: boolean = false;

  constructor(private modalRef: ModalComponent) {}

  public closeModal(): void {
    this.modalRef.dismiss(null);
  }
}
