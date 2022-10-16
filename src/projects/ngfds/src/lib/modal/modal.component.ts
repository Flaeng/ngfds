import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { Observable } from 'rxjs';
import { DkfdsHelper } from '../helpers/dkfds-helper';
import { FdsModalRef } from './modal.service';

@Component({
  selector: 'fds-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  private modalContainer: ViewContainerRef | null = null;

  @ViewChild('modal')
  private modal: ElementRef | null = null;

  private ref: FdsModalRef | null = null;

  private underlayingControl: DKFDS.Modal | null = null;

  static idGenerator = 1;

  id: string = 'modal' + (ModalComponent.idGenerator++).toString();

  createModal<T>(component: Type<T>): ComponentRef<T> {
    if (!this.modalContainer) {
      throw new Error('Cannot find modal container');
    }
    this.modalContainer.clear();
    return this.modalContainer.createComponent(component);
  }

  setModalRef(ref: FdsModalRef): void {
    this.ref = ref;
  }

  ngAfterViewInit(): void {
    if (!this.modal) return;
    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.Modal,
      this.modal.nativeElement
    );
    this.show(null);
  }

  public onResult(): Observable<unknown> {
    throw new Error('Method not implemented.');
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
    this.underlayingControl.hide();
    this.ref?.dismiss(null);
    return true;
  }
}
