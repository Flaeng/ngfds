import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { ItemSelectedEvent, NavigationItemHelper } from '../helpers/navigation-item-helper';
// @ts-ignore
import DKFDS from 'dkfds';

@Component({
  selector: 'fds-step-indicator',
  templateUrl: './step-indicator.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StepIndicatorComponent implements OnChanges, AfterViewInit {
  @Input('expand-template')
  public expandTemplate: TemplateRef<any> | null = null;

  @Input('item-template')
  public itemTemplate: TemplateRef<any> | null = null;

  @Input()
  public items: IStepIndicatorItem[] = [];

  @Input('selected-item')
  public get selectedItem(): IStepIndicatorItem | null {
    return this.selectedIndex == null ? null : this.items[this.selectedIndex];
  }
  public set selectedItem(item: IStepIndicatorItem | null) {
    this.selectedIndex = item == null ? null : this.items.indexOf(item);
  }

  @Input('selected-index')
  public selectedIndex: number | null = null;

  @Input('show-expand-view')
  public showExpandView: 'on-mobile' | 'allways' | 'never' = 'on-mobile';

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<IStepIndicatorItem>> = new EventEmitter();

  @ViewChild('mobileDropdownTrigger') dropdownTrigger!: ElementRef;

  static idGenerator: number = 1;
  id: string = (StepIndicatorComponent.idGenerator++).toString();
  helper: NavigationItemHelper<IStepIndicatorItem>;

  constructor(router: Router) {
    this.helper = new NavigationItemHelper<IStepIndicatorItem>(router, this.itemClicked);
  }

  ngAfterViewInit(): void {
    const dropdown = new DKFDS.Dropdown(this.dropdownTrigger.nativeElement);
    dropdown.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.items && !this.selectedItem) this.selectedItem = this.items[0];
  }

  onItemClicked(ev: Event, item: IStepIndicatorItem): void {
    this.helper.handleClick(ev, item);
  }

  getAriaCurrent(item: IStepIndicatorItem): 'page' | null {
    return item === this.selectedItem ? 'page' : null;
  }
}
export interface IStepIndicatorItem {
  title: string;
  url: string | null;
  icon: string | null;
}
export class StepIndicatorItem implements IStepIndicatorItem {
  public title: string = '';
  /**
   * Don't set this if you want to handle the step indicator clicked event
   * It can be found on the StepIndicatorComponent
   */
  public url: string | null = null;
  public icon: string | null = null;

  constructor(values: Partial<StepIndicatorItem>) {
    Object.assign(this, values);
  }
}
