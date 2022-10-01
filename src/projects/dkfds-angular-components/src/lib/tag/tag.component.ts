import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fds-tag',
  templateUrl: './tag.component.html'
})
export class TagComponent {
  @Input()
  public icon: string | null = null;
}
