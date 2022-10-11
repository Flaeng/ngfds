import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsFooterModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { FooterPageComponent } from './footer-page.component';

const routes: Routes = [{ path: '', component: FooterPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterRoutingModule {}

@NgModule({
  declarations: [FooterPageComponent],
  imports: [
    FooterRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsFooterModule,
    FdsCardModule,
  ],
})
export class FooterPageModule {}
