import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FdsInputModule } from 'projects/ngfds/src/lib/input/input.module';
import { FdsCardModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { InputPageComponent } from './input-page.component';

const routes: Routes = [{ path: '', component: InputPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputRoutingModule {}

@NgModule({
  declarations: [InputPageComponent],
  imports: [
    InputRoutingModule,
    CommonModule,
    FormsModule,
    AppComponentsModule,
    FdsInputModule,
    FdsCardModule,
  ],
})
export class InputPageModule {}
