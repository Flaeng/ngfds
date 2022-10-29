import { Component, OnDestroy, TemplateRef } from '@angular/core';
import {
  ComponentModalOptions,
  FdsModalRef,
  FdsModalService,
} from 'projects/ngfds/src/public-api';
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
  modalExample3result: string | null = null;
  modalExample4result: string | null = null;
  modalExample5result: string | null = null;

  constructor(public modalService: FdsModalService) {
    super();
  }

  openModalExample1(ev: Event): void {
    ev.preventDefault();
    const modalRef = this.modalService.openFromComponent(
      ModalExample1Component,
      {
        event: ev,
        forceAction: false,
        data: null,
      }
    );
    const sub = modalRef.onResult().subscribe({
      next: (x) => (this.modalExample1result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error: (err) => (this.modalExample1result = 'lukket'),
    });
    this._subscriptions.push(sub);
  }

  openModalExample2(ev: Event): void {
    ev.preventDefault();
    const modalRef = this.modalService.openFromComponent(
      ModalExample1Component,
      {
        event: ev,
        forceAction: true,
        data: null,
      }
    );
    const sub = modalRef.onResult().subscribe({
      next: (x) => (this.modalExample2result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error: (err) => (this.modalExample2result = 'lukket'),
    });
    this._subscriptions.push(sub);
  }

  openModalFromComponent(ev: Event, opts: Partial<ComponentModalOptions>) {
    ev.preventDefault();
    const modalRef = this.modalService.openFromComponent(
      ModalExample1Component,
      {
        data: null,
        event: ev,
        forceAction: false,
        ...opts,
      }
    );
    const sub = modalRef.onResult().subscribe({
      next: (x) => (this.modalExample3result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error: (err) => (this.modalExample3result = 'lukket'),
    });
    this._subscriptions.push(sub);
  }

  templateModalRef: FdsModalRef | null = null;
  openModalFromTemplate(
    ev: Event,
    template: TemplateRef<unknown>,
    context: unknown
  ) {
    ev.preventDefault();
    this.templateModalRef = this.modalService.openFromTemplate(template, {
      context: context,
      event: ev,
      forceAction: false,
    });
    const sub = this.templateModalRef.onResult().subscribe({
      next: (x) => (this.modalExample4result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error: (err) => (this.modalExample4result = 'lukket'),
    });
    this._subscriptions.push(sub);
  }

  closeModal(): void {
    this.templateModalRef?.dismiss(null);
  }

  openModalFromHTML(ev: Event, html: string) {
    ev.preventDefault();
    const modalRef = this.modalService.openFromHTML(html, {
      event: ev,
      forceAction: false,
    });
    const sub = modalRef.onResult().subscribe({
      next: (x) => (this.modalExample5result = x as string),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error: (err) => (this.modalExample5result = 'lukket'),
    });
    this._subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((x) => x.unsubscribe());
  }
}
