import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsButtonModule,
  FdsCardModule,
  FdsModalModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { ModalPageComponent } from './modal-page.component';
import { ModalExample1Component } from './modal-example1/modal-example1.component';

const routes: Routes = [{ path: '', component: ModalPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRoutingModule {}

@NgModule({
  declarations: [ModalPageComponent, ModalExample1Component],
  imports: [
    ModalRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsModalModule,
    FdsButtonModule,
    FdsCardModule,
  ],
})
export class ModalPageModule {}
