import { Component } from '@angular/core';
import { ItemSelectedEvent } from 'projects/fds-components/src/lib/helpers/navigation-item-helper';
import { IStepIndicatorItem, StepIndicatorItem } from 'projects/fds-components/src/lib/step-indicator/public-api';

@Component({
  selector: 'app-step-indicator-page',
  templateUrl: './step-indicator-page.component.g.html',
  styleUrls: ['./step-indicator-page.component.scss']
})
export class StepIndicatorPageComponent {
  Math = Math;
  stepIndicatorItems: IStepIndicatorItem[] = [
    new StepIndicatorItem({ title: 'Step 1', url: '' }),
    new StepIndicatorItem({ title: 'Step 2', url: '' }),
    new StepIndicatorItem({ title: 'Step 3', url: '' }),
    new StepIndicatorItem({ title: 'Step 4', url: '' }),
    new StepIndicatorItem({ title: 'Step 5', url: '' }),
  ];  
  alert(message: string): void {
    window.alert(message);
  }
}
