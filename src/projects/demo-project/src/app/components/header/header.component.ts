import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() header = '';
  @Input('sub-header') subHeader: 'Component' | 'Directive' | 'Service' | null = null;
  @Input('doc-url') docUrl: string | null = null;

}
