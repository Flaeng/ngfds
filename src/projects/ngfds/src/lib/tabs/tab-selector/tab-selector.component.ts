import { Component, ElementRef, Input, OnInit, Optional } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: '[fds-tab-selector]',
  templateUrl: './tab-selector.component.html',
})
export class TabSelectorComponent implements OnInit {
  @Input('fds-tab-selector')
  fdsTabSelector: string = '';

  constructor(private el: ElementRef, @Optional() parent: TabsComponent) {
    parent.registerAsTabSelector(this);
  }

  ngOnInit(): void {
    const elem = this.el.nativeElement;
    elem.setAttribute('aria-controls', this.fdsTabSelector);
    elem.setAttribute('id', 'selector' + this.fdsTabSelector);
    elem.classList.add('tabnav-item');
    elem.setAttribute('role', 'tab');
    elem.setAttribute('aria-selected', 'false');
  }

  setActive(): void {
    this.el.nativeElement.setAttribute('aria-selected', 'true');
  }
}
