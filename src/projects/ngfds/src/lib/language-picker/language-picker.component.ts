import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fds-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent {
  @Input()
  public items: ILanguageOption[] = [];

  @Output()
  public change: EventEmitter<LanuageChangeEvent> = new EventEmitter();

  onClick(ev: Event, selectedItem: ILanguageOption): void {
    ev.preventDefault();
    ev.stopPropagation();

    const event: LanuageChangeEvent = { ...ev, selectedItem };
    this.change.emit(event);
  }
}

export interface ILanguageOption {
  nativeLanguageName: string;
  currentLanguageName: string;
  iso639dash1code: string;
  isActive: boolean;
}

export class LanuageChangeEvent extends Event {
  public selectedItem!: ILanguageOption;
}
