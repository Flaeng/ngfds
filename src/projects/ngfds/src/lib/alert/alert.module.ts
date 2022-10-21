import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertContentComponent } from './alert-content/alert-content.component';
import { AlertComponent } from './alert.component';
import { AlertHeaderComponent } from './public-api';

@NgModule({
  declarations: [AlertComponent, AlertHeaderComponent, AlertContentComponent],
  imports: [CommonModule],
  exports: [AlertComponent, AlertHeaderComponent, AlertContentComponent],
})
export class FdsAlertModule {}
