import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsButtonModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { CardPageComponent } from './card-page.component';

const routes: Routes = [{ path: '', component: CardPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}

@NgModule({
  declarations: [CardPageComponent],
  imports: [
    CardRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsCardModule,
    FdsButtonModule,
  ],
})
export class CardPageModule {}
