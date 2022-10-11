import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsCookieMessageModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { CookieMessagePageComponent } from './cookie-message-page.component';

const routes: Routes = [{ path: '', component: CookieMessagePageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookieMessageRoutingModule {}

@NgModule({
  declarations: [CookieMessagePageComponent],
  imports: [
    CookieMessageRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsCookieMessageModule,
    FdsCardModule,
  ],
})
export class CookieMessagePageModule {}
