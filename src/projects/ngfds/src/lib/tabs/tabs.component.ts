import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as DKFDS from 'dkfds';
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
  public selectedIndex = 0;

  ngAfterViewInit(): void {
    this.setSelectedTab();
    const tabnav = new DKFDS.Tabnav(this.tabnav.nativeElement);
    tabnav.init();
  }

  setSelectedTab() {
    this.selectors[this.selectedIndex]?.setActive();
    this.content[this.selectedIndex]?.setActive();
  }

  selectors: TabSelectorComponent[] = [];
  public registerAsTabSelector(item: TabSelectorComponent) {
    this.selectors.push(item);
  }

  content: TabContentComponent[] = [];
  public registerAsTabContent(item: TabContentComponent) {
    this.content.push(item);
  }
}
