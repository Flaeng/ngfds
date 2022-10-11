import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { IntroductionPageComponent } from './introduction-page.component';

const routes: Routes = [{ path: '', component: IntroductionPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionRoutingModule {}

@NgModule({
  declarations: [IntroductionPageComponent],
  imports: [
    IntroductionRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsCardModule,
  ],
})
export class IntroductionPageModule {}
