import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsSkipLinkModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { SkipLinkPageComponent } from './skip-link-page.component';

const routes: Routes = [{ path: '', component: SkipLinkPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkipLinkRoutingModule {}

@NgModule({
  declarations: [SkipLinkPageComponent],
  imports: [
    SkipLinkRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsSkipLinkModule,
    FdsCardModule,
  ],
})
export class SkipLinkPageModule {}
