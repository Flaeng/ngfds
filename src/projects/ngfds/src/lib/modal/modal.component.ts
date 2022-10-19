import {
  Component,
  // #IF angular < 13
  // ComponentFactoryResolver,
  // #ENDIF
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  InjectionToken,
  Injector,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../helpers/dkfds-helper';
import {
  ComponentModalOptions,
  FdsModalRef,
  HtmlModalOptions,
  ModalOptions,
  TemplateModalOptions,
} from './modal.service';

export const FDS_MODAL_DATA = new InjectionToken<unknown>('FDS_MODAL_DATA');

@Component({
  selector: 'fds-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  private modalContainer: ViewContainerRef | null = null;

  @ViewChild('modal')
  private modal: ElementRef<HTMLDivElement> | null = null;

  private _modalRef: FdsModalRef | null = null;
  public get modalRef(): FdsModalRef {
    this.assertNotNull(this._modalRef);
    return this._modalRef;
  }

  private _underlayingControl: DKFDS.Modal | null = null;
  public get underlayingControl(): DKFDS.Modal {
    this.assertNotNull(this._underlayingControl);
    return this._underlayingControl;
  }

  private _allowClose: boolean | null = null;
  public get allowClose(): boolean {
    return this._allowClose === true;
  }

  static idGenerator = 1;

  id: string = 'modal' + (ModalComponent.idGenerator++).toString();

  assertNotNull<T>(value: T | null): asserts value is T {
    if (value === null) {
      throw new Error('Tried to get value before component is instanziated');
    }
  }

  private keyupEventHandler: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((doc: Document, ev: KeyboardEvent) => any) | null = null;

  private _modalContent:
    | ComponentRef<unknown>
    | EmbeddedViewRef<unknown>
    | HTMLElement
    | null = null;
  public get modalContent():
    | ComponentRef<unknown>
    | EmbeddedViewRef<unknown>
    | HTMLElement {
    if (!this._modalContent) {
      throw new Error('Tried to get modal content before it was instantiated');
    }
    return this._modalContent;
  }

  // #IF angular < 13
  // constructor(
  //  private el: ElementRef<HTMLElement>,
  //  private componentFactoryResolver: ComponentFactoryResolver
  // ) { }
  // #ENDIF

  createModalContent<T>(
    modalRef: FdsModalRef,
    content: Type<T>,
    opts: ComponentModalOptions
  ): void;
  createModalContent<T>(
    modalRef: FdsModalRef,
    content: TemplateRef<T>,
    opts: TemplateModalOptions<T>
  ): void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createModalContent<T>(
    modalRef: FdsModalRef,
    content: string,
    opts: HtmlModalOptions
  ): void;
  createModalContent<T>(
    modalRef: FdsModalRef,
    content: unknown,
    opts: ModalOptions
  ): void {
    this.assertNotNull(this.modalContainer);
    this.assertNotNull(this.modal);

    this.handleAllowClose(this.modal.nativeElement, opts.forceAction !== true);
    this._modalRef = modalRef;

    this.modalContainer.clear();
    this.newMethod<T>(content, opts);

    this._underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.Modal,
      this.modal.nativeElement
    );

    // Custom escape handler to call ModalRef.dismiss when fds closes modal
    this.keyupEventHandler = this.handleEscape(this);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener('keyup', this.keyupEventHandler as any);

    // Create fake event with target to make fds setup focus after modal is closed
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const ev = opts.event?.target ? opts.event : null;
    this._underlayingControl.show(ev);
  }

  private newMethod<T>(
    content: unknown,
    opts: ModalOptions
  ): ComponentRef<T> | EmbeddedViewRef<T> | HTMLElement {
    this.assertNotNull(this.modalContainer);
    if (content instanceof TemplateRef) {
      return this.createViewFromTemplate<T>(
        this.modalContainer,
        content,
        (opts as TemplateModalOptions<T>).context
      );
    }
    if (typeof content === 'string') {
      return this.createViewFromString(this.modalContainer, content);
    }
    return this.createViewFromComponent<T>(
      this.modalContainer,
      content as Type<T>,
      (opts as ComponentModalOptions).data
    );
  }

  private getInjectorForModalContent(
    container: ViewContainerRef,
    data: unknown
  ) {
    const opts = {
      parent: container.injector,
      providers: [
        { provide: FdsModalRef, useValue: this.modalRef },
        { provide: FDS_MODAL_DATA, useValue: data },
      ],
    };
    const injector = Injector.create(opts);
    return injector;
  }

  private createViewFromComponent<T>(
    container: ViewContainerRef,
    content: Type<T>,
    data: unknown
  ): ComponentRef<T> {
    const injector = this.getInjectorForModalContent(container, data);
    // #IF angular >= 13
    const result = container.createComponent(content, { injector });
    // #ELSE
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(content);
    // const result = container.createComponent(componentFactory);
    // #ENDIF
    return result;
  }

  private createViewFromTemplate<T>(
    container: ViewContainerRef,
    content: TemplateRef<T>,
    context: T | null
  ): EmbeddedViewRef<T> {
    const result = container.createEmbeddedView<T>(
      content,
      context ?? undefined
    );
    return result;
  }

  private createViewFromString(
    container: ViewContainerRef,
    content: string
  ): HTMLElement {
    const result = document.createElement('div');
    result.innerHTML = content;
    const parent: ElementRef<HTMLElement> = container.element;
    parent.nativeElement.appendChild(result);
    return result;
  }

  private handleEscape(
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
          that._underlayingControl = null;
          that.modalRef.dismiss(null);
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

  public destroy(): void {
    if (!this._underlayingControl) return;
    this._underlayingControl?.hide();
    this._underlayingControl = null;
  }

  ngOnDestroy(): void {
    if (this.keyupEventHandler) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener('keyup', this.keyupEventHandler as any);
    }
  }
}
