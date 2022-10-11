import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsTextareaModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { TextareaPageComponent } from './textarea-page.component';

const routes: Routes = [{ path: '', component: TextareaPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaRoutingModule {}

@NgModule({
  declarations: [TextareaPageComponent],
  imports: [
    TextareaRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsTextareaModule,
    FdsCardModule,
  ],
})
export class TextareaPageModule {}
