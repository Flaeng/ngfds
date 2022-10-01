import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scroll-to]'
})
export class ScrollToDirective {
  @Input("scroll-to") scrollTo: string = '';

  @HostListener('click', ['$event'])
  clicked($event: Event): void {
    const targetElementSelector = this.scrollTo;
    const targetElement = document.body.querySelector(targetElementSelector);  
    targetElement?.scrollIntoView({ behavior: 'smooth' });
    targetElement?.classList.add('flash');
    setTimeout(() => {
      targetElement?.classList.remove('flash');  
    }, 2000);
  }

}
