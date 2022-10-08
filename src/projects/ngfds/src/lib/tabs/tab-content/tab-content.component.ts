import { Component, ElementRef, Input, OnInit, Optional } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: '[fds-tab-content]',
  templateUrl: './tab-content.component.html',
})
export class TabContentComponent implements OnInit {
  @Input('fds-tab-content')
  fdsTabContent: string = '';

  constructor(private el: ElementRef, @Optional() parent: TabsComponent) {
    parent.registerAsTabContent(this);
  }

  ngOnInit(): void {
    const elem = this.el.nativeElement;
    elem.classList.add('tabnav-panel');
    elem.setAttribute('aria-hidden', 'true');
    elem.setAttribute('role', 'tabpanel');
    elem.setAttribute('tabindex', '0');
    elem.setAttribute('id', this.fdsTabContent);
    elem.setAttribute('aria-labelledby', 'selector' + this.fdsTabContent);
  }

  setActive(): void {
    this.el.nativeElement.setAttribute('aria-hidden', 'false');
  }
}
