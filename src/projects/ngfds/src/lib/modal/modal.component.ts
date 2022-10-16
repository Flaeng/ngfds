import {
  Component,
  ComponentRef,
  ElementRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../helpers/dkfds-helper';
import { FdsModalRef } from './modal.service';

@Component({
  selector: 'fds-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  private modalContainer: ViewContainerRef | null = null;

  @ViewChild('modal')
  private modal: ElementRef<HTMLDivElement> | null = null;

  private ref: FdsModalRef | null = null;

  private underlayingControl: DKFDS.Modal | null = null;

  private _allowClose: boolean | null = null;
  public get allowClose(): boolean {
    return this._allowClose === true;
  }

  static idGenerator = 1;

  id: string = 'modal' + (ModalComponent.idGenerator++).toString();

  // createModalFromTemplate<T>(template: TemplateRef<T>, allowClose: boolean): ComponentRef<T> {
  // }

  createModalFromComponent<T>(component: Type<T>, allowClose: boolean): ComponentRef<T> {
    if (!this.modalContainer) {
      throw new Error('Cannot find modal container');
    }
    if (!this.modal) {
      throw new Error('Cannot find modal');
    }
    const modalElem = this.modal.nativeElement;
    this.handleAllowClose(modalElem, allowClose);

    this.modalContainer.clear();
    const result = this.modalContainer.createComponent(component);

    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.Modal,
      this.modal.nativeElement
    );

    this.show(null);
    return result;
  }

  private handleAllowClose(modalElem: HTMLDivElement, allowClose: boolean) {
    this._allowClose = allowClose;
    if (allowClose) {
      modalElem.removeAttribute('data-modal-forced-action');
    } else {
      modalElem.setAttribute('data-modal-forced-action', '');
    }
  }

  setModalRef(ref: FdsModalRef): void {
    this.ref = ref;
  }

  public close(result: unknown): void {
    this.ref?.close(result);
  }

  public dismiss(reason: unknown): void {
    this.ref?.dismiss(reason);
  }

  private show(ev: Event | null): boolean {
    if (!this.underlayingControl) return false;
    this.underlayingControl.show(ev);
    return true;
  }

  public hide(): boolean {
    if (!this.underlayingControl) return false;
    this.destroy();
    this.ref?.dismiss(null);
    return true;
  }

  public destroy(): void {
    try {
      console.log('hiding...');
      this.underlayingControl?.hide();
      console.log('done hiding.');
    } catch (err) {
      console.warn(err);
    }
  }
}
