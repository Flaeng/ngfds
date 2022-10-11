import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsIconsModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { IconsPageComponent } from './icon-page.component';

const routes: Routes = [{ path: '', component: IconsPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconRoutingModule {}

@NgModule({
  declarations: [IconsPageComponent],
  imports: [
    IconRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsIconsModule,
    FdsCardModule,
  ],
})
export class IconPageModule {}
