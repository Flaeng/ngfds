import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsFooterModule,
  FdsLanguagePickerModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { LanguagePickerPageComponent } from './language-picker-page.component';

const routes: Routes = [{ path: '', component: LanguagePickerPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagePickerRoutingModule {}

@NgModule({
  declarations: [LanguagePickerPageComponent],
  imports: [
    LanguagePickerRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsLanguagePickerModule,
    FdsCardModule,
    FdsFooterModule,
  ],
})
export class LanguagePickerPageModule {}
