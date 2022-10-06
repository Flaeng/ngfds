import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieMessageComponent } from './cookie-message.component';



@NgModule({
  declarations: [
    CookieMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CookieMessageComponent
  ]
})
export class FdsCookieMessageModule { }
