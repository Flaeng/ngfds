import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { Observable, Subject } from 'rxjs';

export type FdsModalOptions = {
  container: HTMLElement;
  injector: Injector;
  scrollable: boolean;
  backdrop: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class FdsModalService {
  private modalContainer: HTMLDivElement;

  constructor(
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) document: Document
  ) {
    this.modalContainer = document.createElement('div');
    document.querySelector('body')?.appendChild(this.modalContainer);
  }

  open(component: Type<unknown>): FdsModalRef {
    const modalComponentRef = this.appRef.bootstrap(
      ModalComponent,
      this.modalContainer
    );
    const modalRef = modalComponentRef.instance.createModal(component);
    const result = new FdsModalRef(modalComponentRef, modalRef);
    return result;
  }

  // open(
  //   contentInjector: Injector,
  //   content: Type<unknown> | TemplateRef<unknown> | string,
  //   options: FdsModalOptions
  // ): FdsModalRef {
  //   return new FdsModalRef();
  // }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }
}

export interface ModalRefAware {
  modalInstance: FdsModalRef;
}
export class FdsModalRef {
  private result$ = new Subject<unknown>();

  constructor(
    private modalContainer: ComponentRef<ModalComponent>,
    private modal: ComponentRef<unknown>
  ) {
    this.modalContainer.instance.setModalRef(this);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modalRefAware = this.modal.instance as any;
    if (
      modalRefAware &&
      Object.keys(modalRefAware).indexOf('modalInstance') !== -1
    ) {
      modalRefAware.modalInstance = this;
    }
  }

  public close(result: unknown): void {
    this.result$.next(result);
    this.destroy$();
  }

  public dismiss(reason: unknown): void {
    this.result$.error(reason);
    this.destroy$();
  }

  public onResult(): Observable<unknown> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.modalContainer.instance.hide();
    this.modal.destroy();
    this.modalContainer.destroy();
    this.result$.complete();
  }
}
