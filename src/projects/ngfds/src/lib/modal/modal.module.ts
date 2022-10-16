import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FdsModalService } from './modal.service';
import { ModalComponent } from './modal.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
  ],
  imports: [CommonModule],
  providers: [FdsModalService],
  exports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
  ],
})
export class FdsModalModule {}
