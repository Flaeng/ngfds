import { Component } from '@angular/core';
import { StepIndicatorItem } from 'projects/ngfds/src/lib/step-indicator/public-api';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-step-indicator-page',
  templateUrl: './step-indicator-page.component.g.html',
})
export class StepIndicatorPageComponent extends BasePageComponent {
  Math = Math;
  stepIndicatorItems: StepIndicatorItem[] = [
    new StepIndicatorItem({ title: 'Step 1' }),
    new StepIndicatorItem({ title: 'Step 2' }),
    new StepIndicatorItem({ title: 'Step 3' }),
    new StepIndicatorItem({ title: 'Step 4' }),
    new StepIndicatorItem({ title: 'Step 5' }),
  ];
}
