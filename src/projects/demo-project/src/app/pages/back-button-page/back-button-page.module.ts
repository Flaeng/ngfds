import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsBackButtonModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { BackButtonPageComponent } from './back-button-page.component';

const routes: Routes = [{ path: '', component: BackButtonPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackButtonRoutingModule {}

@NgModule({
  declarations: [BackButtonPageComponent],
  imports: [
    BackButtonRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsBackButtonModule,
    FdsCardModule,
  ],
})
export class BackButtonPageModule {}
