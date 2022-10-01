import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-link',
  templateUrl: './link.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LinkComponent implements OnChanges {

  @Input() href: string = '';
  @Input() target: undefined | null | '_blank';

  _href: string = '';
  _target: string = '';
  _showExternalLinkIcon: boolean = false;

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
