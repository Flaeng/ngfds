import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsPaginationModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { PaginationPageComponent } from './pagination-page.component';

const routes: Routes = [{ path: '', component: PaginationPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginationRoutingModule {}

@NgModule({
  declarations: [PaginationPageComponent],
  imports: [
    PaginationRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsPaginationModule,
    FdsCardModule,
  ],
})
export class PaginationPageModule {}
