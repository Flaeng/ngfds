import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FdsButtonModule } from '../button/button.module';
import { FdsOverflowMenuModule } from '../overflow-menu/overflow-menu.module';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { FunctionLinksComponent } from './function-links/function-links.component';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortalHeaderMobileComponent } from './navigation/portal-header-mobile/portal-header-mobile.component';
import { SolutionHeaderMobileComponent } from './navigation/solution-header-mobile/solution-header-mobile.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { SolutionHeaderComponent } from './solution-header/solution-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContextMenuComponent,
    FunctionLinksComponent,
    NavigationComponent,
    PortalHeaderMobileComponent,
    SolutionHeaderMobileComponent,
    PortalHeaderComponent,
    SolutionHeaderComponent,
  ],
  imports: [CommonModule, RouterModule, FdsOverflowMenuModule, FdsButtonModule],
  exports: [
    HeaderComponent,
    ContextMenuComponent,
    FunctionLinksComponent,
    NavigationComponent,
    PortalHeaderMobileComponent,
    SolutionHeaderMobileComponent,
    PortalHeaderComponent,
    SolutionHeaderComponent,
  ],
})
export class FdsHeaderModule {}
