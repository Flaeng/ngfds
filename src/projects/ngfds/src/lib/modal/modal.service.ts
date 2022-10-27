import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  TemplateRef,
  Type,
} from '@angular/core';
import { FdsModalRef, ModalComponent } from './modal.component';
import {
  ComponentModalOptions,
  HtmlModalOptions,
  ModalOptions,
  TemplateModalOptions,
} from './modal.models';

// INSPIRATION:
// https://stackblitz.com/edit/angular-modal-service?file=app%2Fmodal-service%2Fmodal-service.service.ts

@Injectable({
  providedIn: 'root',
})
export class FdsModalService {
  constructor(private appRef: ApplicationRef) {}

  public openFromComponent<T>(
    content: Type<T>,
    opts: ComponentModalOptions
  ): FdsModalRef {
    return this.open(content, opts);
  }

  public openFromTemplate<T>(
    content: TemplateRef<T>,
    opts: TemplateModalOptions<T>
  ): FdsModalRef {
    return this.open(content, opts);
  }

  public openFromHTML(content: string, opts: HtmlModalOptions): FdsModalRef {
    return this.open(content, opts);
  }

  private open<T>(content: Type<T>, opts: ComponentModalOptions): FdsModalRef;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private open<T>(
    content: TemplateRef<T>,
    opts: TemplateModalOptions<T>
  ): FdsModalRef;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private open<T>(content: string, opts: HtmlModalOptions): FdsModalRef;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private open<T>(content: unknown, opts: ModalOptions): FdsModalRef {
    const modalContainer = window.document.createElement('div');
    modalContainer.classList.add('modal-container');
    const body = window.document.querySelector('body');
    if (!body) throw new Error('Failed to find body-tag in DOM');
    body.appendChild(modalContainer);

    const modalComponentRef = this.appRef.bootstrap(
      ModalComponent,
      modalContainer
    );

    const result = new FdsModalRef(modalComponentRef, opts as ModalOptions);
    this.createModalContent<T>(content, modalComponentRef, result, opts);
    return result;
  }

  private createModalContent<T>(
    content: unknown,
    modalComponentRef: ComponentRef<ModalComponent>,
    result: FdsModalRef,
    opts: ModalOptions
  ) {
    if (content instanceof TemplateRef) {
      modalComponentRef.instance.createModalContent<T>(
        result,
        content,
        opts as TemplateModalOptions<T>
      );
    } else if (typeof content === 'string') {
      modalComponentRef.instance.createModalContent<T>(
        result,
        content,
        opts as HtmlModalOptions
      );
    } else {
      modalComponentRef.instance.createModalContent<T>(
        result,
        content as Type<T>,
        opts as ComponentModalOptions
      );
    }
  }
}
