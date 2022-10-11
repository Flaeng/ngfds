import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavigationComponent } from './side-navigation.component';

@NgModule({
  declarations: [SideNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideNavigationComponent],
})
export class FdsSideNavigationModule {}
