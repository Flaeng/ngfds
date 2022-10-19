import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentRef,
  Inject,
  Injectable,
  TemplateRef,
  Type,
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { Observable, Subject } from 'rxjs';

// INSPIRATION:
// https://stackblitz.com/edit/angular-modal-service?file=app%2Fmodal-service%2Fmodal-service.service.ts

export type TemplateModalOptions<T> = ModalOptions & { context: T | null };
export type ComponentModalOptions = ModalOptions & { data: unknown };
export type HtmlModalOptions = ModalOptions;

export type ModalOptions = {
  forceAction: boolean;
  event: Event | null;
};

@Injectable({
  providedIn: 'root',
})
export class FdsModalService {
  constructor(
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

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
    const modalContainer = this.document.createElement('div');
    modalContainer.classList.add('modal-container');
    const body = this.document.querySelector('body');
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

  private createModalContent<T>(content: unknown, modalComponentRef: ComponentRef<ModalComponent>, result: FdsModalRef, opts: ModalOptions) {
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

export class FdsModalRef {
  private result$ = new Subject<unknown>();
  private isResolved = false;

  public get forceAction(): boolean {
    return this.options.forceAction;
  }

  constructor(
    private modalContainer: ComponentRef<ModalComponent>,
    private options: ModalOptions
  ) {}

  public close(result: unknown): void {
    if (this.isResolved) return;
    this.isResolved = true;
    this.result$.next(result);
    this.destroy$();
  }

  public dismiss(reason: unknown): void {
    if (this.isResolved) return;
    this.result$.error(reason);
    this.destroy$();
  }

  public onResult(): Observable<unknown> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.modalContainer.instance.destroy();
    this.modalContainer.destroy();
    this.result$.complete();
  }
}
