import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsBadgeModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { BadgePageComponent } from './badge-page.component';

const routes: Routes = [{ path: '', component: BadgePageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeRoutingModule {}

@NgModule({
  declarations: [BadgePageComponent],
  imports: [
    BadgeRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsBadgeModule,
    FdsCardModule,
  ],
})
export class BadgePageModule {}
