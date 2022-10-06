import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconBaseComponent } from './icon-base/icon-base.component';

@NgModule({
  declarations: [IconComponent, IconBaseComponent],
  imports: [CommonModule],
  exports: [IconComponent, IconBaseComponent],
})
export class FdsIconsModule {}
