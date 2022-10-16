import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input()
  public header: string | null = null;
}
