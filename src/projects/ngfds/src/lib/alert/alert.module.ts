import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertContentComponent } from './alert-content/alert-content.component';
import { AlertComponent } from './alert.component';
import { AlertHeaderComponent } from './alert-header/alert-header.component';

@NgModule({
  declarations: [AlertComponent, AlertHeaderComponent, AlertContentComponent],
  imports: [CommonModule],
  exports: [AlertComponent, AlertHeaderComponent, AlertContentComponent],
})
export class FdsAlertModule {}
