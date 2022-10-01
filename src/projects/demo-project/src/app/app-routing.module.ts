import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { BackButtonPageComponent } from './pages/back-button-page/back-button-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';
import { BreadcrumbsPageComponent } from './pages/breadcrumbs-page/breadcrumbs-page.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CookieMessagePageComponent } from './pages/cookie-message-page/cookie-message-page.component';
import { DateInputPageComponent } from './pages/date-input-page/date-input-page.component';
import { DatePickerPageComponent } from './pages/date-picker-page/date-picker-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { FunctionLinkPageComponent } from './pages/function-link-page/function-link-page.component';
import { ContextMenuPageComponent } from './pages/header-page/context-menu-page/context-menu-page.component';
import { FunctionLinksPageComponent } from './pages/header-page/function-links-page/function-links-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { NavigationPageComponent } from './pages/header-page/navigation-page/navigation-page.component';
import { PortalHeaderMobilePageComponent } from './pages/header-page/navigation-page/portal-header-mobile-page/portal-header-mobile-page.component';
import { SolutionHeaderMobilePageComponent } from './pages/header-page/navigation-page/solution-header-mobile-page/solution-header-mobile-page.component';
import { PortalHeaderPageComponent } from './pages/header-page/portal-header-page/portal-header-page.component';
import { SolutionHeaderPageComponent } from './pages/header-page/solution-header-page/solution-header-page.component';
import { IconsPageComponent } from './pages/icon-page/icon-page.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { LanguagePickerPageComponent } from './pages/language-picker-page/language-picker-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { OverflowMenuPageComponent } from './pages/overflow-menu-page/overflow-menu-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { SideNavigationPageComponent } from './pages/side-navigation-page/side-navigation-page.component';
import { SkipLinkPageComponent } from './pages/skip-link-page/skip-link-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';
import { StepIndicatorPageComponent } from './pages/step-indicator-page/step-indicator-page.component';
import { StructuredListPageComponent } from './pages/structured-list-page/structured-list-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { ToastPageComponent } from './pages/toast-page/toast-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';

const routes: Routes = [
  { path: '', component: IntroductionPageComponent },
  { path: 'accordions', component: AccordionPageComponent },
  { path: 'beskeder-alerts', component: AlertPageComponent },
  { path: 'badges', component: BadgePageComponent },
  { path: 'broedkrumme', component: BreadcrumbsPageComponent },
  { path: 'cookie-message', component: CookieMessagePageComponent },
  { path: 'tooltip', component: TooltipPageComponent },
  { path: 'knapper', component: ButtonPageComponent },
  { path: 'tabs', component: TabsPageComponent },
  { path: 'cards', component: CardPageComponent },
  { path: 'notification-toast', component: ToastPageComponent },
  { path: 'detaljer', component: DetailsPageComponent },
  { path: 'icons', component: IconsPageComponent },
  { path: 'modalvindue', component: ModalPageComponent },
  { path: 'headers', component: HeaderPageComponent },
  { path: 'headers/portal-header', component: PortalHeaderPageComponent },
  { path: 'headers/solution-header', component: SolutionHeaderPageComponent },
  { path: 'headers/navigation', component: NavigationPageComponent },
  { path: 'headers/navigation/portal-header-mobile', component: PortalHeaderMobilePageComponent },
  { path: 'headers/navigation/solution-header-mobile', component: SolutionHeaderMobilePageComponent },
  { path: 'headers/context-menu', component: ContextMenuPageComponent },
  { path: 'headers/function-links', component: FunctionLinksPageComponent },
  { path: 'side-navigation', component: SideNavigationPageComponent },
  { path: 'overflow-menu', component: OverflowMenuPageComponent },
  // { path: 'textarea', component: TextareaPageComponent },
  { path: 'spinner', component: SpinnerPageComponent },
  { path: 'footers', component: FooterPageComponent },
  { path: 'paginering', component: PaginationPageComponent },
  { path: 'tilbage-link', component: BackButtonPageComponent },
  { path: 'funktionslink', component: FunctionLinkPageComponent },
  { path: 'sprog-vaelger', component: LanguagePickerPageComponent },
  { path: 'step-indicator', component: StepIndicatorPageComponent },
  { path: 'skip-link', component: SkipLinkPageComponent },
  { path: 'strukturerede-lister', component: StructuredListPageComponent },
  { path: 'tags', component: TagPageComponent },
  { path: 'datoangivelse', component: DateInputPageComponent },
  { path: 'datepicker', component: DatePickerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
