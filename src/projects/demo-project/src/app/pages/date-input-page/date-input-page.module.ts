import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsButtonModule,
  FdsCardModule,
  FdsDateInputModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { DateInputPageComponent } from './date-input-page.component';

const routes: Routes = [{ path: '', component: DateInputPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateInputRoutingModule {}

@NgModule({
  declarations: [DateInputPageComponent],
  imports: [
    DateInputRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponentsModule,
    FdsDateInputModule,
    FdsCardModule,
    FdsButtonModule,
  ],
})
export class DateInputPageModule {}
