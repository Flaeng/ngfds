import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonPageComponent } from './radio-button-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from '../../components/components.module';
import { FdsCardModule, FdsRadioButtonModule } from 'projects/ngfds/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: RadioButtonPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioButtonRoutingModule {}

@NgModule({
  declarations: [RadioButtonPageComponent],
  imports: [
    RadioButtonRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponentsModule,
    FdsRadioButtonModule,
    FdsCardModule,
  ],
})
export class RadioButtonPageModule {}
