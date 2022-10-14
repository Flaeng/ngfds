import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FdsCardModule } from 'projects/ngfds/src/lib/card/card.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollToDirective } from './directives/scroll-to.directive';
import {
  FDS_TOAST_SETTINGS,
  IToastSettings,
} from 'projects/ngfds/src/lib/toast/toast.service';
import {
  FdsBadgeModule,
  FdsFooterModule,
  FdsHeaderModule,
  FdsIconsModule,
  FdsSideNavigationModule,
} from 'projects/ngfds/src/public-api';

@NgModule({
  declarations: [AppComponent, ScrollToDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FdsCardModule,
    FdsHeaderModule,
    FdsSideNavigationModule,
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
