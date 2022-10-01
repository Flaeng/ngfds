import { Component, ElementRef, Input, OnInit, Optional } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: '[fds-tab-content]',
  templateUrl: './tab-content.component.html',
})
export class TabContentComponent implements OnInit {
  @Input('fds-tab-content')
  fdsTabContent: string = '';

  elem: HTMLElement;

  constructor(private el: ElementRef, @Optional() parent: TabsComponent) {
    parent.registerAsTabContent(this);
    this.elem = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.elem.classList.add('tabnav-panel');
    this.elem.setAttribute('aria-hidden', 'true');
    this.elem.setAttribute('role', 'tabpanel');
    this.elem.setAttribute('tabindex', '0');
    this.elem.setAttribute('id', this.fdsTabContent);
    this.elem.setAttribute('aria-labelledby', 'selector' + this.fdsTabContent);
  }
  
  setActive(): void {
    this.elem.setAttribute('aria-hidden', 'falses');
  }
}
