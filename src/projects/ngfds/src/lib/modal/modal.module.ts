import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FdsModalService } from './modal.service';

@NgModule({
  providers: [FdsModalService],
  imports: [CommonModule],
})
export class FdsModalModule {}
