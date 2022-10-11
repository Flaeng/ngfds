import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsSpinnerModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { SpinnerPageComponent } from './spinner-page.component';

const routes: Routes = [{ path: '', component: SpinnerPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinnerRoutingModule {}

@NgModule({
  declarations: [SpinnerPageComponent],
  imports: [
    SpinnerRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsSpinnerModule,
    FdsCardModule,
  ],
})
export class SpinnerPageModule {}
