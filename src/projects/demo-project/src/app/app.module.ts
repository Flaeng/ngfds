import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollToDirective } from './directives/scroll-to.directive';
import {
  FdsCardModule,
  FDS_TOAST_SETTINGS,
  IToastSettings,
  FdsBadgeModule,
  FdsFooterModule,
  FdsHeaderModule,
  FdsIconsModule,
  NgfdsSideNavigationModule
} from 'projects/ngfds/src/public-api';

@NgModule({
  declarations: [AppComponent, ScrollToDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FdsCardModule,
    FdsHeaderModule,
    NgfdsSideNavigationModule,
    FdsBadgeModule,
    FdsFooterModule,
    FdsIconsModule,
  ],
  providers: [
    {
      provide: FDS_TOAST_SETTINGS,
      useValue: {
        newToastPosition: 'bottom',
      } as IToastSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
