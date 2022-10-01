import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() header: string = '';
  @Input('sub-header') subHeader: 'Component' | 'Directive' | 'Service' | null = null;
  @Input('doc-url') docUrl: string | null = null;

}
