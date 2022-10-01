import { Component, ElementRef, Input, OnInit, Optional } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: '[fds-tab-selector]',
  templateUrl: './tab-selector.component.html'
})
export class TabSelectorComponent implements OnInit {
  @Input('fds-tab-selector')
  fdsTabSelector = '';

  elem: HTMLElement;

  constructor(private el: ElementRef, @Optional() parent: TabsComponent) {
    parent.registerAsTabSelector(this);
    this.elem = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.elem.setAttribute('aria-controls', this.fdsTabSelector);
    this.elem.setAttribute('id', 'selector' + this.fdsTabSelector);
    this.elem.classList.add('tabnav-item');
    this.elem.setAttribute('role', 'tab');
    this.elem.setAttribute('aria-selected', 'false');
  }

  setActive(): void {
    this.elem.setAttribute('aria-selected', 'true');
  }
}
