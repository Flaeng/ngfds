import { Component } from '@angular/core';
import { StepIndicatorItem } from 'projects/dkfds-angular-components/src/lib/step-indicator/public-api';

@Component({
  selector: 'app-step-indicator-page',
  templateUrl: './step-indicator-page.component.g.html',
  styleUrls: ['./step-indicator-page.component.scss']
})
export class StepIndicatorPageComponent {
  Math = Math;
  stepIndicatorItems: StepIndicatorItem[] = [
    new StepIndicatorItem({ title: 'Step 1' }),
    new StepIndicatorItem({ title: 'Step 2' }),
    new StepIndicatorItem({ title: 'Step 3' }),
    new StepIndicatorItem({ title: 'Step 4' }),
    new StepIndicatorItem({ title: 'Step 5' }),
  ];  
  alert(message: string): void {
    window.alert(message);
  }
}
