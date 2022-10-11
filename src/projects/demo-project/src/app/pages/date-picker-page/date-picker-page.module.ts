import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsButtonModule,
  FdsCardModule,
  FdsDatePickerModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { DatePickerPageComponent } from './date-picker-page.component';

const routes: Routes = [{ path: '', component: DatePickerPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatePickerRoutingModule {}

@NgModule({
  declarations: [DatePickerPageComponent],
  imports: [
    DatePickerRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponentsModule,
    FdsDatePickerModule,
    FdsCardModule,
    FdsButtonModule,
  ],
})
export class DatePickerPageModule {}
