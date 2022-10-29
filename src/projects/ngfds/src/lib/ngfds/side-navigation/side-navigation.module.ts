import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfdsSideNavigationComponent } from './side-navigation.component';
import { FdsSideNavigationModule } from '../../side-navigation/side-navigation.module';
import { SideNavigationComponent } from '../../side-navigation/public-api';

@NgModule({
  declarations: [NgfdsSideNavigationComponent],
  imports: [CommonModule, FdsSideNavigationModule],
  exports: [NgfdsSideNavigationComponent, SideNavigationComponent],
})
export class NgfdsSideNavigationModule {}
