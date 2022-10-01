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

@Component({
  selector: 'fds-structured-list-item',
  templateUrl: './structured-list-item.component.html',
  styleUrls: ['./structured-list-item.component.css'],
})
export class StructuredListItemComponent implements OnInit {
  @Input()
  public header: string | null = null;

  @Input()
  public content: string | null = null;

  @Input()
  public canEdit: boolean = false;

  @Output()
  public edit: EventEmitter<Event> = new EventEmitter();

  @ViewChild('template', { static: true })
  private template!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  editClicked(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.edit.emit(ev);
  }
}
