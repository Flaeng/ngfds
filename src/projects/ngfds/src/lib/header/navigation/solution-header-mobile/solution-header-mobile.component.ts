import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-solution-header-mobile',
  templateUrl: './solution-header-mobile.component.html',
})
export class SolutionHeaderMobileComponent {
  @Input('authority-name')
  public authorityName: string | null = null;

  @Input('authority-phone')
  public authorityPhoneNo: string | null = null;

  @Input('authority-contact')
  public authorityContactUrl: string | null = null;
}
