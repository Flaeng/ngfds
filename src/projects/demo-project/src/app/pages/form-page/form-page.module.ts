import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from '../../components/components.module';
import {
  FdsCardModule,
  FdsDateInputModule,
} from 'projects/ngfds/src/public-api';
import { FdsFormsModule } from 'projects/ngfds/src/lib/form-field/form-field.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: FormPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorSummaryRoutingModule {}

@NgModule({
  declarations: [FormPageComponent],
  imports: [
    ErrorSummaryRoutingModule,
    CommonModule,
    AppComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FdsCardModule,
    FdsDateInputModule,
    FdsFormsModule,
  ],
})
export class ErrorSummaryPageModule {}
