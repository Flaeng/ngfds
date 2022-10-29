import { Component } from '@angular/core';
import { SideNavigationItem } from 'projects/ngfds/src/public-api';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-side-navigation-page',
  templateUrl: './side-navigation-page.component.g.html',
})
export class SideNavigationPageComponent extends BasePageComponent {
  page1children: SideNavigationItem[] = [
    new SideNavigationItem({ url: '#', title: 'Page 1.0' }),
    new SideNavigationItem({ url: '#', title: 'Page 1.1' }),
    new SideNavigationItem({ url: '#', title: 'Page 1.2' }),
    new SideNavigationItem({ url: '#', title: 'Page 1.3' }),
  ];

  page4children: SideNavigationItem[] = [
    new SideNavigationItem({ url: '#', title: 'Page 4.0' }),
    new SideNavigationItem({ url: '#', title: 'Page 4.1' }),
    new SideNavigationItem({ url: '#', title: 'Page 4.2', isActive: true }),
    new SideNavigationItem({ url: '#', title: 'Page 4.3' }),
  ];

  sideNavigationItems: SideNavigationItem[] = [
    new SideNavigationItem({
      url: '#',
      title: 'Page 1',
      children: this.page1children,
    }),
    new SideNavigationItem({ url: '#', title: 'Page 2' }),
    new SideNavigationItem({ url: '#', title: 'Page 3' }),
    new SideNavigationItem({
      url: '#',
      title: 'Page 4',
      children: this.page4children,
      isActive: true,
    }),
    new SideNavigationItem({ url: '#', title: 'Page 5' }),
    new SideNavigationItem({ url: '#', title: 'Page 6' }),
    new SideNavigationItem({ url: '#', title: 'Page 7' }),
  ];
}
