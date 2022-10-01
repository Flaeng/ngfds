import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input()
  public header: string | null = null;
}
