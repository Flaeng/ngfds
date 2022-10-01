import { Component } from '@angular/core';

@Component({
  selector: 'fds-skip-link',
  templateUrl: './skip-link.component.html',
})
export class SkipLinkComponent {

  onClick(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    
    const targetElement = document.body.querySelector<HTMLElement>('#main-content');  
    if (!targetElement)
      return;
    
    targetElement.scrollIntoView();
    targetElement.focus();
  }
}
