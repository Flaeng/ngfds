import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation.component';
import { FdsSideNavigationModule } from '../../side-navigation/side-navigation.module';

@NgModule({
  declarations: [SideNavigationComponent],
  imports: [CommonModule, FdsSideNavigationModule],
  exports: [SideNavigationComponent],
})
export class NgfdsSideNavigationModule {}
