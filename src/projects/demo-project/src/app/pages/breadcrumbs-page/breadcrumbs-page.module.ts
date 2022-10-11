import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsBreadcrumbsModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { BreadcrumbsPageComponent } from './breadcrumbs-page.component';

const routes: Routes = [{ path: '', component: BreadcrumbsPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsRoutingModule {}

@NgModule({
  declarations: [BreadcrumbsPageComponent],
  imports: [
    BreadcrumbsRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsBreadcrumbsModule,
    FdsCardModule,
  ],
})
export class BadgePageModule {}
