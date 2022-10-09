import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { DropdownComponent } from '../dropdown.component';

@Component({
  selector: 'ngfds-option',
  templateUrl: './dropdown-option.component.html',
  styleUrls: ['./dropdown-option.component.css'],
})
export class DropdownOptionComponent implements OnInit, OnDestroy {
  @ViewChild('dropdownOption')
  private dropdownOption!: ElementRef<HTMLDivElement>;

  @Input()
  public text: string = '';

  parentAllowsMultiple: boolean = false;
  isSelected: boolean = false;

  constructor(@Optional() protected parent: DropdownComponent) {}

  ngOnInit(): void {
    this.parent?.registerOption(this);
  }

  public setFocus(): void {
    (this.dropdownOption.nativeElement as HTMLElement).focus();
  }

  public hasFocus(): boolean {
    return document.activeElement === this.dropdownOption.nativeElement;
  }

  public toggleSelected(ev: Event): void {
    this.preventDefault(ev);
    this.parent.toggleItemSelected(ev, this);
  }

  public select(ev: Event): void {
    this.preventDefault(ev);
    this.parent.selectItem(ev, this);
  }

  public unselect(ev: Event): void {
    this.preventDefault(ev);
    this.parent.unselectItem(ev, this);
  }

  private preventDefault(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  ngOnDestroy(): void {
    this.parent?.unregisterOption(this);
  }
}
