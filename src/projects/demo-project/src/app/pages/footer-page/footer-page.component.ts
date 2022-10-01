import { Component, Input } from '@angular/core';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.g.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent extends BasePageComponent {
  @Input("authority-name")
  public authorityName: string | null = null;

  @Input("authority-email")
  public authorityEmail: string | null = null;

  @Input("authority-phone")
  public authorityPhone: string | null = null;

  @Input("availability-declaration")
  public availabilityDeclaration: string | null = null;

  @Input("privacy-policy")
  public privacyPolicy: string | null = null;
}
