import { AfterViewInit, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import DKFDS from 'dkfds';

@Component({
  selector: 'fds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements AfterViewInit {
  @Input()
  public items: INavigationItem[] | null = null;
  
  @Input()
  public overflow: INavigationItem[] | null = null;
  
  @Input('overflow-text')
  public overflowText: string = 'Mere';

  @Input('selected-item')
  public selectedItem: INavigationItem | null = null;
  
  @Input("solution-template")
  public solutionTemplate: TemplateRef<any> | null = null;
  
  @Input("portal-template")
  public portalTemplate: TemplateRef<any> | null = null;
  
  constructor(
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    const navi = new DKFDS.Navigation();
    navi.init();
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
  public title: string = '';
  public url: string | null = null;
  public isActive: boolean = false;
  public children: NavigationItem[] | null = null;

  constructor(values: Partial<NavigationItem>) {
    Object.assign(this, values);
  }
}