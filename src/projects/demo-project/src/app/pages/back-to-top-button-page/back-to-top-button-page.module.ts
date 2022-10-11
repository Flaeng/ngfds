import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsBackToTopButtonModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { BackToTopButtonPageComponent } from './back-to-top-button-page.component';

const routes: Routes = [{ path: '', component: BackToTopButtonPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackToTopButtonRoutingModule {}

@NgModule({
  declarations: [BackToTopButtonPageComponent],
  imports: [
    BackToTopButtonRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsBackToTopButtonModule,
    FdsCardModule,
  ],
})
export class BackToTopButtonPageModule {}
