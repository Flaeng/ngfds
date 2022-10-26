import { Component, Input, TemplateRef } from '@angular/core';
import { ISideNavigationItem } from '../../side-navigation/side-navigation.component';

@Component({
  selector: 'ngfds-side-navigation',
  templateUrl: './side-navigation.component.html',
  styles: [
    `
      header {
        padding: 8px 16px;
        font-weight: bold;
        margin-top: 16px;
        font-size: 2rem;
        cursor: pointer;
      }
      header .icon-svg {
        transition-duration: .3s;
        transition-property: transform;
        transform: rotate(0deg);
      }
      header .icon-svg.pull-right {
        float: right;
      }
      header.expanded .icon-svg {
        transform: rotate(180deg);
      }
    `,
  ],
})
export class SideNavigationComponent {
  @Input()
  public items: ISideNavigationItem[] = [];

  @Input('item-template')
  public itemTemplate: TemplateRef<unknown> | null = null;

  @Input('is-expanded')
  public isExpanded: boolean = false;

  @Input()
  public header: string = '';

  @Input('icon-position')
  public iconPosition: 'left' | 'right' = 'left';
}
