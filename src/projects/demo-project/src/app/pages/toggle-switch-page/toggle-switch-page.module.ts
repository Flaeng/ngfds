import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsToggleSwitchModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { ToggleSwitchPageComponent } from './toggle-switch-page.component';

const routes: Routes = [{ path: '', component: ToggleSwitchPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToggleSwitchRoutingModule {}

@NgModule({
  declarations: [ToggleSwitchPageComponent],
  imports: [
    ToggleSwitchRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsToggleSwitchModule,
    FdsCardModule,
  ],
})
export class ToggleSwitchPageModule {}
