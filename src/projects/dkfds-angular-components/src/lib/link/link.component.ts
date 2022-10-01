import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-link',
  templateUrl: './link.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LinkComponent implements OnChanges {

  @Input() href = '';
  @Input() target: undefined | null | '_blank';

  _href = '';
  _target = '';
  _showExternalLinkIcon = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this._href = this.href;
    if (this.href.startsWith('http')) {
      this._target = '_blank';
      this._showExternalLinkIcon = true;
    } else {
      this._showExternalLinkIcon = false;
    }
  }

}
