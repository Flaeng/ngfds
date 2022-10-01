import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scroll-to]',
})
export class ScrollToDirective {
  @Input('scroll-to') scrollTo = '';

  @HostListener('click')
  clicked(): void {
    const targetElementSelector = this.scrollTo;
    const targetElement = document.body.querySelector(targetElementSelector);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
    targetElement?.classList.add('flash');
    setTimeout(() => {
      targetElement?.classList.remove('flash');
    }, 2000);
  }
}
