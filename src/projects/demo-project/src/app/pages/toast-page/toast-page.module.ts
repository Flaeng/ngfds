import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsButtonModule, FdsCardModule, FdsToastModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { ToastPageComponent } from './toast-page.component';

const routes: Routes = [{ path: '', component: ToastPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastRoutingModule {}

@NgModule({
  declarations: [ToastPageComponent],
  imports: [
    ToastRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsToastModule,
    FdsCardModule,
    FdsButtonModule
  ],
})
export class ToastPageModule {}
