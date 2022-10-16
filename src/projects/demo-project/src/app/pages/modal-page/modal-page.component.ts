import { Component, OnDestroy } from '@angular/core';
import { FdsModalService } from 'projects/ngfds/src/lib/modal/public-api';
import { Subscription } from 'rxjs';
import { BasePageComponent } from '../BasePageComponent';
import { ModalExample1Component } from './modal-example1/modal-example1.component';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.g.html',
})
export class ModalPageComponent extends BasePageComponent implements OnDestroy {
  _subscriptions: Subscription[] = [];
  modalExample1result: string | null = null;
  modalExample2result: string | null = null;

  constructor(public modalService: FdsModalService) {
    super();
  }

  openModalExample1(ev: Event): void {
    ev.preventDefault();
    const modalRef = this.modalService.open(ModalExample1Component, false);
    const sub = modalRef.onResult().subscribe(
      (x) => (this.modalExample1result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err) => (this.modalExample1result = 'lukket')
      // () => {}
    );
    this._subscriptions.push(sub);
  }

  openModalExample2(ev: Event): void {
    ev.preventDefault();
    const modalRef = this.modalService.open(ModalExample1Component, true);
    const sub = modalRef.onResult().subscribe(
      (x) => (this.modalExample2result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err) => (this.modalExample2result = 'lukket')
      // () => {}
    );
    this._subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((x) => x.unsubscribe());
  }
}
