import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsButtonModule, FdsCardModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { ButtonPageComponent } from './button-page.component';

const routes: Routes = [{ path: '', component: ButtonPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonRoutingModule {}

@NgModule({
  declarations: [ButtonPageComponent],
  imports: [
    ButtonRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsButtonModule,
    FdsCardModule,
  ],
})
export class ButtonPageModule {}
