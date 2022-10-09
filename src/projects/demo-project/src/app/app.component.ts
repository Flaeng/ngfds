import { Component } from '@angular/core';
import { SideNavigationItem } from 'projects/ngfds/src/lib/side-navigation/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FDS Demo Project';
  subtitle = 'Unofficial Open Source FDS WebComponent Project';

  
  getAriaCurrent(item: AppSideNavigationItem): true | false | 'page' {
    if (item.isActive === false) return false;

    if (!item.children) return 'page';

    return item.children.some((x) => x.isActive) ? true : 'page';
  }

  introductionMenu: SideNavigationItem[] = [
    new SideNavigationItem({ url: '', title: 'Mission' }),
    new SideNavigationItem({ url: 'versioning', title: 'Versioning' }),
    
    new SideNavigationItem({
      url: 'getting-started', title: 'Getting Started',
      children: [
        new SideNavigationItem({ url: 'angular', title: 'Setting up angular' }),
        new SideNavigationItem({ url: 'dkfds', title: 'Setting up DKFDS' }),
        new SideNavigationItem({ url: 'dkfds-components', title: 'Setting up DKFDS-ng-components' }),
        new SideNavigationItem({ url: 'main-component', title: 'Setting up master template' }),
        new SideNavigationItem({ url: 'pages', title: 'Setting up pages' }),
      ]
    }),
    
    new SideNavigationItem({ url: 'issues', title: 'Having issues?' }),
  ];

  dkfdsComponents: SideNavigationItem[] = [
    new AppSideNavigationItem({ url: 'accordions', title: 'Accordions', state: 'done' }),
    new AppSideNavigationItem({ url: 'badges', title: 'Badges', state: 'done' }),
    new AppSideNavigationItem({ url: 'beskeder-alerts', title: 'Beskeder (Alerts)', state: 'done' }),
    new AppSideNavigationItem({ url: 'broedkrumme', title: 'Brødkrumme', state: 'done' }),
    new AppSideNavigationItem({ url: 'cards', title: 'Cards', state: 'done' }),
    new AppSideNavigationItem({ url: 'cookie-message', title: 'Cookiemeddelelse', state: 'done' }),
    new AppSideNavigationItem({ url: 'datoangivelse', title: 'Datoangivelse', state: 'done' }),
    new AppSideNavigationItem({ url: 'datepicker', title: 'Datovælger', state: 'done' }),
    new AppSideNavigationItem({ url: 'detaljer', title: 'Detaljer', state: 'done' }),
    new AppSideNavigationItem({ url: 'dropdown-menu', title: 'Dropdown-menu' }),
    new AppSideNavigationItem({ url: 'tabs', title: 'Faneblade', state: 'done' }),
    new AppSideNavigationItem({ url: 'fejlbeskeder', title: 'Fejlbeskeder' }),
    new AppSideNavigationItem({ url: 'fejlopsummering', title: 'Fejlopsummering' }),
    new AppSideNavigationItem({ url: 'felter', title: 'Felter' }),
    new AppSideNavigationItem({ url: 'footers', title: 'Footers', state: 'work in progress' }),
    new AppSideNavigationItem({ url: 'formular', title: 'Formular' }),
    new AppSideNavigationItem({ url: 'funktionslink', title: 'Funktionslink', state: 'done' }),
    new AppSideNavigationItem({
      url: 'headers', title: 'Headers', state: 'done',
      children: [
        new AppSideNavigationItem({ url: 'headers/portal-header', title: 'Portal Header', state: 'done' }),
        new AppSideNavigationItem({ url: 'headers/solution-header', title: 'Solution Header', state: 'done' }),
        new AppSideNavigationItem({
          url: 'headers/navigation', title: 'Navigation', state: 'done',
          children: [
            new AppSideNavigationItem({ url: 'headers/navigation/portal-header-mobile', title: 'Portal Header Mobile', state: 'done' }),
            new AppSideNavigationItem({ url: 'headers/navigation/solution-header-mobile', title: 'Solution Header Mobile', state: 'done' }),
          ]
      }),
        new AppSideNavigationItem({ url: 'headers/context-menu', title: 'Context Menu', state: 'done' }),
        new AppSideNavigationItem({ url: 'headers/function-links', title: 'Function Links', state: 'done' }),
      ]
    }),
    new AppSideNavigationItem({ url: 'icons', title: 'Ikoner', state: 'done' }),
    new AppSideNavigationItem({ url: 'knapper', title: 'Knapper', state: 'done' }),
    new AppSideNavigationItem({ url: 'modalvindue', title: 'Modalvindue' }),
    new AppSideNavigationItem({ url: 'notification-toast', title: 'Notification (Toast)', state: 'done' }),
    new AppSideNavigationItem({ url: 'overflow-menu', title: 'Overflow menu', state: 'done' }),
    new AppSideNavigationItem({ url: 'paginering', title: 'Paginering', state: 'done' }),
    new AppSideNavigationItem({ url: 'radioknap', title: 'Radioknap' }),
    new AppSideNavigationItem({ url: 'side-navigation', title: 'Sidenavigation', state: 'done' }),
    new AppSideNavigationItem({ url: 'skip-link', title: 'Skip-link', state: 'done' }),
    new AppSideNavigationItem({ url: 'spinner', title: 'Spinner', state: 'done' }),
    new AppSideNavigationItem({ url: 'sprog-vaelger', title: 'Sprogvælger', state: 'done' }),
    new AppSideNavigationItem({ url: 'strukturerede-lister', title: 'Strukturerede lister', state: 'done' }),
    new AppSideNavigationItem({ url: 'soegefelt', title: 'Søgefelt' }),
    new AppSideNavigationItem({ url: 'tilbage-link', title: 'Tilbage link', state: 'done' }),
    new AppSideNavigationItem({ url: 'tilbage-til-toppen-link', title: 'Tilbage til toppen link', state: 'done' }),
    new AppSideNavigationItem({ url: 'tabeller', title: 'Tabeller' }),
    new AppSideNavigationItem({ url: 'tags', title: 'Tags', state: 'done' }),
    new AppSideNavigationItem({ url: 'textarea', title: 'Tekstområde' }),
    new AppSideNavigationItem({ url: 'checkbox', title: 'Tjekboks', state: 'done' }),
    new AppSideNavigationItem({ url: 'toggle-switch', title: 'Toggle switch' }),
    new AppSideNavigationItem({ url: 'tooltip', title: 'Tooltip', state: 'done' }),
    new AppSideNavigationItem({ url: 'step-indicator', title: 'Trinindikator', state: 'done' }),
    new AppSideNavigationItem({ url: '#', title: 'Vedhæft fil (Upload)' }),
  ];

  dkfdsExtra: SideNavigationItem[] = [
    new AppSideNavigationItem({ url: 'ngfds/animations', title: 'Animations' }),
    new AppSideNavigationItem({ url: 'ngfds/promise-button', title: 'Promise button' }),
    new AppSideNavigationItem({ url: 'ngfds/dropdown', title: 'Dropdown (multiselect)' }),
    new AppSideNavigationItem({ url: 'ngfds/side-navigation', title: 'Sidenavigation (collapsable)' }),
  ];

}

export class AppSideNavigationItem extends SideNavigationItem {
  state: 'not implemented' | 'work in progress' | 'done' = 'not implemented';

  constructor(values: Partial<AppSideNavigationItem>) {
    super(values);
    Object.assign(this, values);
  }
}
