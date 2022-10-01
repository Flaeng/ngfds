import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FdsAccordionModule } from 'projects/fds-components/src/lib/accordion/accordion.module';
import { FdsAlertModule } from 'projects/fds-components/src/lib/alert/alert.module';
import { FdsBadgeModule } from 'projects/fds-components/src/lib/badge/badge.module';
import { FdsBreadcrumbsModule } from 'projects/fds-components/src/lib/breadcrumbs/breadcrumbs.module';
import { FdsButtonModule } from 'projects/fds-components/src/lib/button/button.module';
import { FdsCardModule } from 'projects/fds-components/src/lib/card/card.module';
import { FdsDetailsModule } from 'projects/fds-components/src/lib/details/details.module';
import { FdsFooterModule } from 'projects/fds-components/src/lib/footer/footer.module';
import { FdsHeaderModule } from 'projects/fds-components/src/lib/header/header.module';
import { FdsLanguagePickerModule } from 'projects/fds-components/src/lib/language-picker/language-picker.module';
import { FdsLinkModule } from 'projects/fds-components/src/lib/link/link.module';
import { FdsOverflowMenuModule } from 'projects/fds-components/src/lib/overflow-menu/overflow-menu.module';
import { FdsPaginationModule } from 'projects/fds-components/src/lib/pagination/pagination.module';
import { FdsSideNavigationModule } from 'projects/fds-components/src/lib/side-navigation/side-navigation.module';
import { FdsSkipLinkModule } from 'projects/fds-components/src/lib/skip-link/skip-link.module';
import { FdsSpinnerModule } from 'projects/fds-components/src/lib/spinner/spinner.module';
import { FdsStepIndicatorModule } from 'projects/fds-components/src/lib/step-indicator/step-indicator.module';
import { FdsTextareaModule } from 'projects/fds-components/src/lib/textarea/textarea.module';
import { FdsTooltipModule } from 'projects/fds-components/src/lib/tooltip/tooltip.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoViewComponent } from './components/demo-view/demo-view.component';
import { DocViewComponent } from './components/doc-view/doc-view.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';
import { BreadcrumbsPageComponent } from './pages/breadcrumbs-page/breadcrumbs-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { ContextMenuPageComponent } from './pages/header-page/context-menu-page/context-menu-page.component';
import { FunctionLinksPageComponent } from './pages/header-page/function-links-page/function-links-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { NavigationPageComponent } from './pages/header-page/navigation-page/navigation-page.component';
import { PortalHeaderMobilePageComponent } from './pages/header-page/navigation-page/portal-header-mobile-page/portal-header-mobile-page.component';
import { SolutionHeaderMobilePageComponent } from './pages/header-page/navigation-page/solution-header-mobile-page/solution-header-mobile-page.component';
import { PortalHeaderPageComponent } from './pages/header-page/portal-header-page/portal-header-page.component';
import { SolutionHeaderPageComponent } from './pages/header-page/solution-header-page/solution-header-page.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { LanguagePickerPageComponent } from './pages/language-picker-page/language-picker-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { OverflowMenuPageComponent } from './pages/overflow-menu-page/overflow-menu-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { SideNavigationPageComponent } from './pages/side-navigation-page/side-navigation-page.component';
import { SkipLinkPageComponent } from './pages/skip-link-page/skip-link-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';
import { StepIndicatorPageComponent } from './pages/step-indicator-page/step-indicator-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { CookieMessagePageComponent } from './pages/cookie-message-page/cookie-message-page.component';
import { FdsCookieMessageModule } from 'projects/fds-components/src/lib/cookie-message/public-api';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { FdsTabsModule } from 'projects/fds-components/src/lib/tabs/tabs.module';
import { FdsIconsModule } from 'projects/fds-components/src/lib/icon/icons.module';
import { IconsPageComponent } from './pages/icon-page/icon-page.component';
import { FdsTagModule } from 'projects/fds-components/src/lib/tag/tag.module';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { ToastPageComponent } from './pages/toast-page/toast-page.component';
import { FDS_TOAST_OPTIONS, IToastOptions } from 'projects/fds-components/src/lib/toast/toast.service';
import { BackButtonPageComponent } from './pages/back-button-page/back-button-page.component';
import { FdsBackButtonModule } from 'projects/fds-components/src/lib/back-button/back-button.module';
import { FunctionLinkPageComponent } from './pages/function-link-page/function-link-page.component';
import { FdsFunctionLinkModule } from 'projects/fds-components/src/lib/function-link/function-link.module';
import { StructuredListPageComponent } from './pages/structured-list-page/structured-list-page.component';
import { FdsStructuredListModule } from 'projects/fds-components/src/lib/structured-list/structured-list.module';
import { DateInputPageComponent } from './pages/date-input-page/date-input-page.component';
import { FdsDateInputModule } from 'projects/fds-components/src/lib/date-input/date-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerPageComponent } from './pages/date-picker-page/date-picker-page.component';
import { FdsDatePickerModule } from 'projects/fds-components/src/lib/date-picker/date-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    CardPageComponent,
    BadgePageComponent,
    StepIndicatorPageComponent,
    SideNavigationPageComponent,
    SpinnerPageComponent,
    HeaderPageComponent,
    DemoViewComponent,
    HeaderComponent,
    ButtonPageComponent,
    IntroductionPageComponent,
    DocViewComponent,
    ScrollToDirective,
    AlertPageComponent,
    BreadcrumbsPageComponent,
    DetailsPageComponent,
    TooltipPageComponent,
    ModalPageComponent,
    FooterPageComponent,
    PaginationPageComponent,
    LanguagePickerPageComponent,
    SkipLinkPageComponent,
    FunctionLinksPageComponent,
    ContextMenuPageComponent,
    NavigationPageComponent,
    PortalHeaderPageComponent,
    SolutionHeaderPageComponent,
    PortalHeaderMobilePageComponent,
    SolutionHeaderMobilePageComponent,
    OverflowMenuPageComponent,
    CardPageComponent,
    AccordionPageComponent,
    CookieMessagePageComponent,
    TabsPageComponent,
    IconsPageComponent,
    TagPageComponent,
    ToastPageComponent,
    BackButtonPageComponent,
    FunctionLinkPageComponent,
    StructuredListPageComponent,
    DateInputPageComponent,
    DatePickerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FdsAccordionModule,
    FdsCookieMessageModule,
    FdsAlertModule,
    FdsBadgeModule,
    FdsBreadcrumbsModule,
    FdsTabsModule,
    FdsButtonModule,
    FdsCardModule,
    FdsDetailsModule,
    FdsFooterModule,
    FdsHeaderModule,
    FdsLanguagePickerModule,
    FdsLinkModule,
    FdsOverflowMenuModule,
    FdsPaginationModule,
    FdsSideNavigationModule,
    FdsSkipLinkModule,
    FdsSpinnerModule,
    FdsStepIndicatorModule,
    FdsTextareaModule,
    FdsTooltipModule,
    FdsIconsModule,
    FdsTagModule,
    FdsStructuredListModule,
    FdsBackButtonModule,
    FdsFunctionLinkModule,
    FdsDateInputModule,
    FdsDatePickerModule
  ],
  providers: [
    {
      provide: FDS_TOAST_OPTIONS,
      useValue: {
        newToastPosition: 'bottom'
      } as IToastOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
