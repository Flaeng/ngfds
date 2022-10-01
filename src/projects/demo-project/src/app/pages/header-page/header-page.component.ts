import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'projects/fds-components/src/lib/header/navigation/navigation.component';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.g.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  page1children: NavigationItem[] = [
    new NavigationItem({ url: 'headers', title: 'Page 1.0' }),
    new NavigationItem({ url: 'headers', title: 'Page 1.1' }),
    new NavigationItem({ url: 'headers', title: 'Page 1.2' }),
    new NavigationItem({ url: 'headers', title: 'Page 1.3' }),
  ];
  
  page2children: NavigationItem[] = [
    new NavigationItem({ url: 'headers', title: 'Page 2.0' }),
    new NavigationItem({ url: 'headers', title: 'Page 2.1' }),
    new NavigationItem({ url: 'headers', title: 'Page 2.2' }),
    new NavigationItem({ url: 'headers', title: 'Page 2.3' }),
    new NavigationItem({ url: 'headers', title: 'Page 2.2' }),
    new NavigationItem({ url: 'headers', title: 'Page 2.3' }),
  ];

  navigationItems: NavigationItem[] = [
    new NavigationItem({ url: 'headers', title: 'Page 1', children: this.page1children }),
    new NavigationItem({ url: 'headers', title: 'Page 2', children: this.page2children }),
    new NavigationItem({ url: 'headers', title: 'Page 3' }),
  ];


  ngOnInit(): void {
  }

  alert(message: string): void {
    window.alert(message);
  }

}
