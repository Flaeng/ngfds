import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'fds-spinner',
  templateUrl: './spinner.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent implements OnInit, OnChanges, OnDestroy {
  @Input('is-spinning')
  public isSpinning: boolean = true;

  @Input()
  public type: 'normal' | 'long-running' = 'normal';

  @Input()
  public settings: SpinnerTextSetting[] | null = null;

  readonly normalSettings: SpinnerTextSetting[] = [
    { duration: 0, text: 'Arbejder' },
    { duration: 5000, text: 'Arbejder stadig' },
    { duration: 11000, text: 'Det tager længere ned forventet, beklager' },
    { duration: 18000, text: 'Vi er stadig i gang, undskyld ventetiden' },
  ];

  readonly longRunningSettings: SpinnerTextSetting[] = [
    { duration: 0, text: 'Det tager 3-5 minutter, hav tålmodighed' },
    { duration: 5 * 60000, text: 'Nu burde der ikke gå meget længere' },
    {
      duration: 5.5 * 60000,
      text: 'Det tager længere ned forventet, beklager',
    },
    { duration: 6 * 60000, text: 'Vi er stadig i gang, undskyld ventetiden' },
  ];

  intervalIdentifier: NodeJS.Timer | null = null;

  spinnerDuration: number = 0;
  statusText: string = '';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSpinning) this.startSpinner();
    else this.stopSpinner();
  }

  ngOnInit(): void {
    if (this.isSpinning) this.startSpinner();
  }

  ngOnDestroy(): void {
    this.stopSpinner();
  }

  public startSpinner() {
    this.spinnerDuration = 0;
    const tick = () => {
      this.spinnerDuration += 1000;
      const settings =
        this.settings ??
        (this.type === 'normal'
          ? this.normalSettings
          : this.longRunningSettings);

      this.statusText =
        settings
          .filter((x) => x.duration < this.spinnerDuration)
          .slice(-1)
          .pop()?.text ?? '';
    };
    tick();
    this.intervalIdentifier = setInterval(tick, 1000);
  }

  public stopSpinner() {
    if (this.intervalIdentifier) clearInterval(this.intervalIdentifier);
  }
}

export class SpinnerTextSetting {
  /**
   * the duration in ms after which the text-property should be shown in the spinner
   */
  public duration: number = 0;
  /**
   * the text to show after the duration has elapsed
   */
  public text: string = '';
}
