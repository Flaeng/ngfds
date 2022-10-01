import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fds-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit {
  @Input('auto-expand')
  public autoExpand = false;

  @Input('rows')
  public rows = '5';

  static idGenerator = 1;

  id: string = (TextareaComponent.idGenerator++).toString();

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const elem: Element = this.element.nativeElement;
    const area = elem.querySelector('textarea');
    if (area == null) return;

    const offset = area.offsetHeight - area.clientHeight;
    area?.addEventListener('input', () => {
      if (this.autoExpand) {
        area.style.height = 'auto';
        area.style.height = area.scrollHeight + offset + 'px';
      }
    });
  }
}
