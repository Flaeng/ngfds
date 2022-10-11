import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsModalModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { ModalPageComponent } from './modal-page.component';

const routes: Routes = [{ path: '', component: ModalPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRoutingModule {}

@NgModule({
  declarations: [ModalPageComponent],
  imports: [
    ModalRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsModalModule,
    FdsCardModule,
  ],
})
export class ModalPageModule {}
