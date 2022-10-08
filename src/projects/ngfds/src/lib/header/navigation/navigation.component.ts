import { AfterViewInit, Component, Input, OnDestroy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as DKFDS from 'dkfds';

@Component({
  selector: 'fds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  @Input()
  public items: INavigationItem[] | null = null;
  
  @Input()
  public overflow: INavigationItem[] | null = null;
  
  @Input('overflow-text')
  public overflowText = 'Mere';

  @Input('selected-item')
  public selectedItem: INavigationItem | null = null;
  
  @Input("solution-template")
  public solutionTemplate: TemplateRef<unknown> | null = null;
  
  @Input("portal-template")
  public portalTemplate: TemplateRef<unknown> | null = null;
  
  public navigation: DKFDS.Navigation | null = null;

  constructor(
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.navigation = new DKFDS.Navigation();
    this.navigation.init();
  }
  
  ngOnDestroy(): void {
    this.navigation?.teardown();
  }

  navigateTo(ev: Event, url: string): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.router.navigateByUrl(url);
  }
}
export interface INavigationItem {
  title: string;
  url: string | null;
  isActive: boolean;
  children: INavigationItem[] | null;
}
export class NavigationItem {
  public title = '';
  public url: string | null = null;
  public isActive = false;
  public children: NavigationItem[] | null = null;

  constructor(values: Partial<NavigationItem>) {
    Object.assign(this, values);
  }
}
