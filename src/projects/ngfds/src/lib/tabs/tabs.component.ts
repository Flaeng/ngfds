import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../helpers/dkfds-helper';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabSelectorComponent } from './tab-selector/tab-selector.component';

@Component({
  selector: 'fds-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterViewInit {
  @ViewChild('tabnav')
  private tabnav!: ElementRef;

  @Input('selected-index')
  public selectedIndex: number = 0;

  underlayingControl: DKFDS.Tabnav | null = null;

  ngAfterViewInit(): void {
    this.setSelectedTab();
    this.underlayingControl = DkfdsHelper.createAndInit(DKFDS.Tabnav, this.tabnav);
  }

  setSelectedTab() {
    this.selectors[this.selectedIndex]?.setActive();
    this.content[this.selectedIndex]?.setActive();
  }

  selectors: TabSelectorComponent[] = [];
  registerAsTabSelector(item: TabSelectorComponent) {
    this.selectors.push(item);
  }

  content: TabContentComponent[] = [];
  registerAsTabContent(item: TabContentComponent) {
    this.content.push(item);
  }
}
