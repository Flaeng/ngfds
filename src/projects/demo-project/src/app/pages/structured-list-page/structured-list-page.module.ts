import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsStructuredListModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { StructuredListPageComponent } from './structured-list-page.component';

const routes: Routes = [{ path: '', component: StructuredListPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructuredListRoutingModule {}

@NgModule({
  declarations: [StructuredListPageComponent],
  imports: [
    StructuredListRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsStructuredListModule,
    FdsCardModule,
  ],
})
export class StructuredListPageModule {}
