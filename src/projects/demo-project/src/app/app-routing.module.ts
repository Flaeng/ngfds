import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';

const routes: Routes = [
  { path: '', component: IntroductionPageComponent },

  {
    path: 'accordions',
    loadChildren: () =>
      import('./pages/accordion-page/accordion-page.module').then(
        (x) => x.AccordionPageModule
      ),
  },
  {
    path: 'beskeder-alerts',
    loadChildren: () =>
      import('./pages/alert-page/alert-page.module').then(
        (x) => x.AlertPageModule
      ),
  },
  {
    path: 'badges',
    loadChildren: () =>
      import('./pages/badge-page/badge-page.module').then(
        (x) => x.BadgePageModule
      ),
  },
  {
    path: 'broedkrumme',
    loadChildren: () =>
      import('./pages/breadcrumbs-page/breadcrumbs-page.module').then(
        (x) => x.BreadcrumbsRoutingModule
      ),
  },
  {
    path: 'cookie-message',
    loadChildren: () =>
      import('./pages/cookie-message-page/cookie-message-page.module').then(
        (x) => x.CookieMessagePageModule
      ),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('./pages/tooltip-page/tooltip-page.module').then(
        (x) => x.TooltipPageModule
      ),
  },
  {
    path: 'search-field',
    loadChildren: () =>
      import('./pages/search-field-page/search-field-page.module').then(
        (x) => x.SearchFieldPageModule
      ),
  },
  {
    path: 'fejlbeskeder',
    loadChildren: () =>
      import('./pages/form-field-page/form-field-page.module').then(
        (x) => x.ErrorMessagePageModule
      ),
  },
  {
    path: 'file-upload',
    loadChildren: () =>
      import('./pages/file-upload-page/file-upload-page.module').then(
        (x) => x.FileUploadPageModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/input-page/input-page.module').then(
        (x) => x.InputPageModule
      ),
  },
  {
    path: 'fejlopsummering',
    loadChildren: () =>
      import('./pages/form-page/form-page.module').then(
        (x) => x.ErrorSummaryPageModule
      ),
  },
  {
    path: 'knapper',
    loadChildren: () =>
      import('./pages/button-page/button-page.module').then(
        (x) => x.ButtonPageModule
      ),
  },
  {
    path: 'radiobutton',
    loadChildren: () =>
      import('./pages/radio-button-page/radio-button-page.module').then(
        (x) => x.RadioButtonPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs-page/tabs-page.module').then(
        (x) => x.TabsPageModule
      ),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./pages/card-page/card-page.module').then(
        (x) => x.CardPageModule
      ),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./pages/checkbox-page/checkbox-page.module').then(
        (x) => x.CheckboxPageModule
      ),
  },
  {
    path: 'notification-toast',
    loadChildren: () =>
      import('./pages/toast-page/toast-page.module').then(
        (x) => x.ToastPageModule
      ),
  },
  {
    path: 'detaljer',
    loadChildren: () =>
      import('./pages/details-page/details-page.module').then(
        (x) => x.DetailsPageModule
      ),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./pages/icon-page/icon-page.module').then(
        (x) => x.IconPageModule
      ),
  },
  {
    path: 'modalvindue',
    loadChildren: () =>
      import('./pages/modal-page/modal-page.module').then(
        (x) => x.ModalPageModule
      ),
  },
  {
    path: 'headers',
    loadChildren: () =>
      import('./pages/header-page/header-page.module').then(
        (x) => x.HeaderPageModule
      ),
  },
  {
    path: 'side-navigation',
    loadChildren: () =>
      import('./pages/side-navigation-page/side-navigation-page.module').then(
        (x) => x.SideNavigationPageModule
      ),
  },
  {
    path: 'overflow-menu',
    loadChildren: () =>
      import('./pages/overflow-menu-page/overflow-menu-page.module').then(
        (x) => x.OverflowMenuPageModule
      ),
  },
  {
    path: 'dropdown-menu',
    loadChildren: () =>
      import('./pages/dropdown-page/dropdown-page.module').then(
        (x) => x.DropdownPageModule
      ),
  },
  {
    path: 'textarea',
    loadChildren: () =>
      import('./pages/textarea-page/textarea-page.module').then(
        (x) => x.TextareaPageModule
      ),
  },
  {
    path: 'spinner',
    loadChildren: () =>
      import('./pages/spinner-page/spinner-page.module').then(
        (x) => x.SpinnerPageModule
      ),
  },
  {
    path: 'footers',
    loadChildren: () =>
      import('./pages/footer-page/footer-page.module').then(
        (x) => x.FooterPageModule
      ),
  },
  {
    path: 'paginering',
    loadChildren: () =>
      import('./pages/pagination-page/pagination-page.module').then(
        (x) => x.PaginationPageModule
      ),
  },
  {
    path: 'tilbage-link',
    loadChildren: () =>
      import('./pages/back-button-page/back-button-page.module').then(
        (x) => x.BackButtonPageModule
      ),
  },
  {
    path: 'tilbage-til-toppen-link',
    loadChildren: () =>
      import(
        './pages/back-to-top-button-page/back-to-top-button-page.module'
      ).then((x) => x.BackToTopButtonPageModule),
  },
  {
    path: 'funktionslink',
    loadChildren: () =>
      import('./pages/function-link-page/function-link-page.module').then(
        (x) => x.FunctionLinkPageModule
      ),
  },
  {
    path: 'toggle-switch',
    loadChildren: () =>
      import('./pages/toggle-switch-page/toggle-switch-page.module').then(
        (x) => x.ToggleSwitchPageModule
      ),
  },
  {
    path: 'sprog-vaelger',
    loadChildren: () =>
      import('./pages/language-picker-page/language-picker-page.module').then(
        (x) => x.LanguagePickerPageModule
      ),
  },
  {
    path: 'step-indicator',
    loadChildren: () =>
      import('./pages/step-indicator-page/step-indicator-page.module').then(
        (x) => x.StepIndicatorPageModule
      ),
  },
  {
    path: 'skip-link',
    loadChildren: () =>
      import('./pages/skip-link-page/skip-link-page.module').then(
        (x) => x.SkipLinkPageModule
      ),
  },
  {
    path: 'strukturerede-lister',
    loadChildren: () =>
      import('./pages/structured-list-page/structured-list-page.module').then(
        (x) => x.StructuredListPageModule
      ),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./pages/tag-page/tag-page.module').then((x) => x.TagPageModule),
  },
  {
    path: 'datoangivelse',
    loadChildren: () =>
      import('./pages/date-input-page/date-input-page.module').then(
        (x) => x.DateInputPageModule
      ),
  },
  {
    path: 'datepicker',
    loadChildren: () =>
      import('./pages/date-picker-page/date-picker-page.module').then(
        (x) => x.DatePickerPageModule
      ),
  },
  {
    path: 'ngfds',
    loadChildren: () =>
      import('./pages/ngfds/ngfds.module').then((x) => x.NgfdsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
