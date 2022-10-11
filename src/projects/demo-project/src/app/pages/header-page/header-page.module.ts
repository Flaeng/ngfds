import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsHeaderModule,
  FdsOverflowMenuModule,
  FdsSkipLinkModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { ContextMenuPageComponent } from './context-menu-page/context-menu-page.component';
import { FunctionLinksPageComponent } from './function-links-page/function-links-page.component';
import { HeaderPageComponent } from './header-page.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { PortalHeaderMobilePageComponent } from './navigation-page/portal-header-mobile-page/portal-header-mobile-page.component';
import { SolutionHeaderMobilePageComponent } from './navigation-page/solution-header-mobile-page/solution-header-mobile-page.component';
import { PortalHeaderPageComponent } from './portal-header-page/portal-header-page.component';
import { SolutionHeaderPageComponent } from './solution-header-page/solution-header-page.component';

const routes: Routes = [
  { path: '', component: HeaderPageComponent },
  { path: 'portal-header', component: PortalHeaderPageComponent },
  { path: 'solution-header', component: SolutionHeaderPageComponent },
  { path: 'navigation', component: NavigationPageComponent },
  {
    path: 'navigation/portal-header-mobile',
    component: PortalHeaderMobilePageComponent,
  },
  {
    path: 'navigation/solution-header-mobile',
    component: SolutionHeaderMobilePageComponent,
  },
  { path: 'context-menu', component: ContextMenuPageComponent },
  { path: 'function-links', component: FunctionLinksPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}

@NgModule({
  declarations: [
    HeaderPageComponent,
    ContextMenuPageComponent,
    FunctionLinksPageComponent,
    PortalHeaderMobilePageComponent,
    SolutionHeaderMobilePageComponent,
    NavigationPageComponent,
    PortalHeaderPageComponent,
    SolutionHeaderPageComponent,
  ],
  imports: [
    HeaderRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsHeaderModule,
    FdsOverflowMenuModule,
    FdsSkipLinkModule,
    FdsCardModule,
  ],
})
export class HeaderPageModule {}
