import { Component, Optional } from '@angular/core';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'fds-footer-column',
  templateUrl: './footer-column.component.html',
})
export class FooterColumnComponent {
  constructor(@Optional() parent: FooterComponent) {
    parent.columns.push(this);
  }
}
