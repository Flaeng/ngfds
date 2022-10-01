import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'fds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit, OnChanges {
  
  @Input() public visual: 'primary' | 'secondary' | 'tertiary' = 'primary';
  
  @Input() public disabled: boolean = false;

  @Input() public type: 'button' | 'submit' | 'reset' = 'button';

  cssClass: Record<string, boolean> = {};
  
  ngOnInit(): void {
    this.setClass();  
  }

  setClass(): void {
    this.cssClass = {};
    this.cssClass[`button-${this.visual}`] = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setClass();
  }

}