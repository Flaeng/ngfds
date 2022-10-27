import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import * as DKFDS from 'dkfds';

@Component({
  selector: 'fds-navigation',
  templateUrl: './navigation.component.html',
  styles: [
    `
      .nav-primary li .overflow-menu button.button-overflow-menu {
        padding-left: 16px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  @Input()
  public items: NavigationItem[] | null = null;

  @Input()
  public overflow: NavigationItem[] | null = null;

  @Input('overflow-text')
  public overflowText: string = 'Mere';

  @Input('selected-item')
  public selectedItem: NavigationItem | null = null;

  @Input('solution-template')
  public solutionTemplate: TemplateRef<unknown> | null = null;

  @Input('portal-template')
  public portalTemplate: TemplateRef<unknown> | null = null;

  public navigation: DKFDS.Navigation | null = null;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.navigation = new DKFDS.Navigation();
    this.navigation.init();
  }

  ngOnDestroy(): void {
    this.navigation?.teardown();
  }

  hasChildren(item: NavigationItem): boolean {
    return !!(<NavigationItemWithChildren>item).children;
  }

  navigateTo(ev: Event, url: string): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.router.navigateByUrl(url);
  }
}
export type NavigationItem =
  | (BaseNavigationItem & NavigationItemWithChildren)
  | (BaseNavigationItem & NavigationItemWithUrl);
type NavigationItemWithUrl = { url: string };
type NavigationItemWithChildren = { children: NavigationItem[] };
type BaseNavigationItem = { title: string; isActive: boolean };
