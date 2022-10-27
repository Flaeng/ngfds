
export type TemplateModalOptions<T> = ModalOptions & { context: T | null };
export type ComponentModalOptions = ModalOptions & { data: unknown };
export type HtmlModalOptions = ModalOptions;

export type ModalOptions = {
  forceAction: boolean;
  event: Event | null;
};
