import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertContentComponent } from './alert-content/alert-content.component';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent,
    AlertContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    AlertContentComponent
  ]
})
export class FdsAlertModule { }
