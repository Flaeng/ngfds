import { Component, Input, Optional } from '@angular/core';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'fds-footer-column',
  templateUrl: './footer-column.component.html',
})
export class FooterColumnComponent {
  @Input() public header: string | null = null;
  constructor(@Optional() parent: FooterComponent) {
    parent.columns.push(this);
  }
}
