import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-function-link',
  templateUrl: './function-link.component.html',
})
export class FunctionLinkComponent {
  @Input()
  public icon: string | null = null;

  @Input()
  public text: string = '';
}
