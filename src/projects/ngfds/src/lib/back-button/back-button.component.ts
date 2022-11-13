import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'fds-back-button',
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent {
  @Input()
  public link: string | null = null;

  get _link(): string | SafeUrl {
    return (
      this.link ??
      this.sanitizer.bypassSecurityTrustUrl('javascript:history.back()')
    );
  }

  constructor(private sanitizer: DomSanitizer) {}
}
