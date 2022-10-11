import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FdsToastService } from './toast.service';

@NgModule({
  providers: [FdsToastService],
  imports: [CommonModule],
})
export class FdsToastModule {}
