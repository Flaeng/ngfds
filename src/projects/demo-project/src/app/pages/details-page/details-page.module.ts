import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsDetailsModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { DetailsPageComponent } from './details-page.component';

const routes: Routes = [{ path: '', component: DetailsPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    DetailsRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsDetailsModule,
    FdsCardModule,
  ],
})
export class DetailsPageModule {}
