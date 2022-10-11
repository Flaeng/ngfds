import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsFunctionLinkModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { FunctionLinkPageComponent } from './function-link-page.component';

const routes: Routes = [{ path: '', component: FunctionLinkPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionLinkRoutingModule {}

@NgModule({
  declarations: [FunctionLinkPageComponent],
  imports: [
    FunctionLinkRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsFunctionLinkModule,
    FdsCardModule,
  ],
})
export class FunctionLinkPageModule {}
