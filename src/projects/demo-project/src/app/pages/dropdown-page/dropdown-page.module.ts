import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsButtonModule,
  FdsCardModule,
  FdsDropdownModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { DropdownPageComponent } from './dropdown-page.component';

const routes: Routes = [{ path: '', component: DropdownPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropdownRoutingModule {}

@NgModule({
  declarations: [DropdownPageComponent],
  imports: [
    DropdownRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsDropdownModule,
    FdsCardModule,
    FdsButtonModule,
  ],
})
export class DropdownPageModule {}
