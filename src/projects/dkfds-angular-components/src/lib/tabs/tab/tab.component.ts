import {
  Component,
  Input,
  ViewContainerRef,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'fds-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
  @Input()
  public header = '';

  @ViewChild('template', { static: true })
  private template!: TemplateRef<unknown>;

  static idGenerator = 1;

  id: string = 'tabcomponent' + (TabComponent.idGenerator++).toString();

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
