import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FdsCheckboxModule } from 'projects/ngfds/src/lib/checkbox/checkbox.module';
import { FdsCardModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { CheckboxPageComponent } from './checkbox-page.component';

const routes: Routes = [{ path: '', component: CheckboxPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxRoutingModule {}

@NgModule({
  declarations: [CheckboxPageComponent],
  imports: [
    CheckboxRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsCheckboxModule,
    FdsCardModule,
  ],
})
export class CheckboxPageModule {}
