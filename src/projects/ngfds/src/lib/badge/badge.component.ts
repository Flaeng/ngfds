import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-badge',
  templateUrl: './badge.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent {
  // https://designsystem.dk/komponenter/badges/
  @Input() public size: 'large' | 'small' | null = null;
  @Input() public type: 'success' | 'info' | 'warning' | 'error' | null = null;
}
