import {
  Component,
  // #IF angular < 13
  // ComponentFactoryResolver,
  // #ENDIF
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

  private modalRef: FdsModalRef | null = null;

  private underlayingControl: DKFDS.Modal | null = null;

  private _allowClose: boolean | null = null;
  public get allowClose(): boolean {
    return this._allowClose === true;
  }

  static idGenerator = 1;

  id: string = 'modal' + (ModalComponent.idGenerator++).toString();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private keyupEventHandler: ((doc: Document, ev: KeyboardEvent) => any) | null = null;

  // createModalFromTemplate<T>(template: TemplateRef<T>, allowClose: boolean): ComponentRef<T> {
  // }

  // #IF angular < 13
  // constructor(private el: ElementRef<HTMLElement>, private componentFactoryResolver: ComponentFactoryResolver) {}
  // #ENDIF

  createModalFromComponent<T>(
    component: Type<T>,
    allowClose: boolean,
    source: HTMLElement | null
  ): ComponentRef<T> {
    if (!this.modalContainer) {
      throw new Error('Cannot find modal container');
    }
    if (!this.modal) {
      throw new Error('Cannot find modal');
    }
    const modalElem = this.modal.nativeElement;
    this.handleAllowClose(modalElem, allowClose);

    this.modalContainer.clear();
    // #IF angular >= 13
    const result = this.modalContainer.createComponent(component);
    // #ELSE
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    // const result = this.modalContainer.createComponent(componentFactory);
    // #ENDIF

    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.Modal,
      this.modal.nativeElement
    );

    this.keyupEventHandler = this.handleEscape(this);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener('keyup', this.keyupEventHandler as any);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fakeEvent: Event | null = source ? { target: source } as any : null;
    this.underlayingControl.show(fakeEvent);
    return result;
  }

  handleEscape(
    that: ModalComponent
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): (doc: Document, ev: KeyboardEvent) => any {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return () => {
      setTimeout(() => {
        const visibleModal = document.querySelector(
          '.fds-modal[aria-hidden=false]'
        );
        if (visibleModal === null) {
          that.underlayingControl = null;
          that.dismiss(null);
        }
      });
    };
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
    this.modalRef = ref;
  }

  public close(result: unknown): void {
    this.modalRef?.close(result);
  }

  public dismiss(reason: unknown): void {
    this.modalRef?.dismiss(reason);
  }

  public hide(): boolean {
    if (!this.underlayingControl) return false;
    this.destroy();
    this.modalRef?.dismiss(null);
    return true;
  }

  public destroy(): void {
    if (!this.underlayingControl) return;
    this.underlayingControl?.hide();
    this.underlayingControl = null;
  }

  ngOnDestroy(): void {
    if (this.keyupEventHandler) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener('keyup', this.keyupEventHandler as any);
    }
  }
}
