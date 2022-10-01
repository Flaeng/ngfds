import { Component, OnInit } from '@angular/core';
import { SideNavigationItem } from 'projects/fds-components/src/lib/side-navigation/public-api';

@Component({
  selector: 'app-side-navigation-page',
  templateUrl: './side-navigation-page.component.g.html',
  styleUrls: ['./side-navigation-page.component.scss']
})
export class SideNavigationPageComponent {

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
    new SideNavigationItem({ url: '#', title: 'Page 1', children: this.page1children }),
    new SideNavigationItem({ url: '#', title: 'Page 2' }),
    new SideNavigationItem({ url: '#', title: 'Page 3' }),
    new SideNavigationItem({ url: '#', title: 'Page 4', children: this.page4children, isActive: true }),
    new SideNavigationItem({ url: '#', title: 'Page 5' }),
    new SideNavigationItem({ url: '#', title: 'Page 6' }),
    new SideNavigationItem({ url: '#', title: 'Page 7' }), 
  ];

}
