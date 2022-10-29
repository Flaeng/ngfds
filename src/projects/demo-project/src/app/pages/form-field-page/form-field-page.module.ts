import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldPageComponent } from './form-field-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from '../../components/components.module';
import {
  FdsCardModule,
  FdsDateInputModule,
  FdsFormsModule,
  FdsInputModule
} from 'projects/ngfds/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: FormFieldPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorMessageRoutingModule {}

@NgModule({
  declarations: [FormFieldPageComponent],
  imports: [
    ErrorMessageRoutingModule,
    CommonModule,
    AppComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FdsCardModule,
    FdsDateInputModule,
    FdsFormsModule,
    FdsInputModule,
  ],
})
export class ErrorMessagePageModule {}
