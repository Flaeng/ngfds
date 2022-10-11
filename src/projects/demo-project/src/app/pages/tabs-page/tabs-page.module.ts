import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsTabsModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { TabsPageComponent } from './tabs-page.component';

const routes: Routes = [{ path: '', component: TabsPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}

@NgModule({
  declarations: [TabsPageComponent],
  imports: [
    TabsRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsTabsModule,
    FdsCardModule,
  ],
})
export class TabsPageModule {}
