import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ClickHelper } from '../../helpers/click-helper';

@Component({
  selector: 'fds-structured-list-item',
  templateUrl: './structured-list-item.component.html',
})
export class StructuredListItemComponent implements OnInit {
  @Input()
  public header: string | null = null;

  @Input()
  public content: string | null = null;

  @Input()
  public canEdit = false;

  @Output()
  public edit: EventEmitter<Event> = new EventEmitter();

  @ViewChild('template', { static: true })
  private template!: TemplateRef<unknown>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  editClicked(ev: Event): void {
    ClickHelper.preventDefaultAndEmit(ev, this.edit);
  }
}
