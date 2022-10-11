import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsSideNavigationModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { SideNavigationPageComponent } from './side-navigation-page.component';

const routes: Routes = [{ path: '', component: SideNavigationPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideNavigationRoutingModule {}

@NgModule({
  declarations: [SideNavigationPageComponent],
  imports: [
    SideNavigationRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsSideNavigationModule,
    FdsCardModule,
  ],
})
export class SideNavigationPageModule {}
