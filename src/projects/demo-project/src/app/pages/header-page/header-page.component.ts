import { Component } from '@angular/core';
import { NavigationItem } from 'projects/ngfds/src/lib/header/navigation/navigation.component';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.g.html',
})
export class HeaderPageComponent extends BasePageComponent {
  page1children: NavigationItem[] = [
    { url: 'headers', title: 'Page 1.0', isActive: false },
    { url: 'headers', title: 'Page 1.1', isActive: false },
    { url: 'headers', title: 'Page 1.2', isActive: false },
    { url: 'headers', title: 'Page 1.3', isActive: false },
  ];

  page2children: NavigationItem[] = [
    { url: 'headers', title: 'Page 2.0', isActive: false },
    { url: 'headers', title: 'Page 2.1', isActive: false },
    { url: 'headers', title: 'Page 2.2', isActive: false },
    { url: 'headers', title: 'Page 2.3', isActive: false },
    { url: 'headers', title: 'Page 2.2', isActive: false },
    { url: 'headers', title: 'Page 2.3', isActive: false },
  ];

  navigationItems: NavigationItem[] = [
    { title: 'Page 1', children: this.page1children, isActive: false },
    { isActive: false, title: 'Page 2', children: this.page2children },
    { isActive: false, url: 'headers', title: 'Page 3' },
  ];
}
