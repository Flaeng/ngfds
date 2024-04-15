import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { NgfdsDropdownComponent } from '../dropdown.component';

@Component({
  selector: 'ngfds-option',
  templateUrl: './dropdown-option.component.html',
})
export class NgfdsDropdownOptionComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('dropdownOption')
  private dropdownOption!: ElementRef<HTMLDivElement>;

  @ViewChild('content')
  private content!: ElementRef<HTMLDivElement>;

  text: string = '';
  html: string = '';

  @Input({ required: true }) value?: any;

  parentAllowsMultiple: boolean = false;
  isSelected: boolean = false;

  constructor(
    @Optional() public parent: NgfdsDropdownComponent,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.parent?.registerOption(this);
  }

  ngAfterViewInit(): void {
    const elem = this.content.nativeElement;
    this.html = elem.innerHTML;
    this.text = elem.innerText;
  }

  public setFocus(): void {
    (this.dropdownOption.nativeElement as HTMLElement).focus();
  }

  public hasFocus(): boolean {
    return document.activeElement === this.dropdownOption.nativeElement;
  }

  private preventDefaultAndForwardEvent(
    ev: Event,
    emitter: (ev: Event, comp: NgfdsDropdownOptionComponent) => void
  ): void {
    ev.preventDefault();
    ev.stopPropagation();
    emitter.bind(this.parent)(ev, this);
  }

  public toggleSelected(ev: Event): void {
    this.preventDefaultAndForwardEvent(ev, this.parent.toggleItemSelected);
  }

  public select(ev: Event): void {
    this.preventDefaultAndForwardEvent(ev, this.parent.selectItem);
  }

  public unselect(ev: Event): void {
    this.preventDefaultAndForwardEvent(ev, this.parent.unselectItem);
  }

  ngOnDestroy(): void {
    this.parent?.unregisterOption(this);
  }
}
