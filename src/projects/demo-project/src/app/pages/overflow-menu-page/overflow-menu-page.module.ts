import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsOverflowMenuModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { OverflowMenuPageComponent } from './overflow-menu-page.component';

const routes: Routes = [{ path: '', component: OverflowMenuPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverflowMenuRoutingModule {}

@NgModule({
  declarations: [OverflowMenuPageComponent],
  imports: [
    OverflowMenuRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsOverflowMenuModule,
    FdsCardModule,
  ],
})
export class OverflowMenuPageModule {}
