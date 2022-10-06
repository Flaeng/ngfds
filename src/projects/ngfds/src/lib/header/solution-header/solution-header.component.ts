import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-solution-header',
  templateUrl: './solution-header.component.html',
  styleUrls: ['./solution-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SolutionHeaderComponent {

  @Input()
  public header: string | null = null;
  
  @Input("authority-name")
  public authorityName: string | null = null;
  
  @Input("authority-phone")
  public authorityPhoneNo: string | null = null;
  
  @Input("authority-contact")
  public authorityContactUrl: string | null = null;
}
