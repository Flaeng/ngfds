import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//@ts-ignore
import DKFDS from 'dkfds';

export const FDS_TOAST_OPTIONS = new InjectionToken<IToastOptions>(
  'FDS_TOAST_OPTIONS'
);

@Injectable({
  providedIn: 'root',
})
export class FdsToastService {
  toastContainer: HTMLDivElement | null = null;

  constructor(@Inject(FDS_TOAST_OPTIONS) public options: IToastOptions | null) {
    const elem = document.querySelector<HTMLDivElement>('div.toast-container');
    if (elem != null) {
      this.toastContainer = elem;
      return;
    }

    const body = document.querySelector('body');
    if (body == null) {
      console.warn('Failed to find body element - cannot display toasts');
      return;
    }

    this.toastContainer = document.createElement('div');
    this.toastContainer.classList.add('toast-container');
    body.appendChild(this.toastContainer);
  }

  public show(toast: IToast): Subject<any> {
    const obs = new Subject<any>();
    if (this.toastContainer == null) return obs;

    const elem = this.createToastElement(toast, obs);

    if (this.options?.newToastPosition == 'top') {
      this.toastContainer.prepend(elem);
    } else {
      this.toastContainer.append(elem);
    }

    let fdsToast = new DKFDS.Toast(elem);
    fdsToast.show();

    if (toast.timeout != null) {
      setTimeout(function () {
        fdsToast.hide();
        obs.next({});
      }, toast.timeout);
    }

    return obs;
  }

  private createToastElement(toast: IToast, obs: Subject<any>): HTMLDivElement {
    const elem = document.createElement('div');
    elem.classList.add('toast');
    elem.classList.add(`toast-${toast.type}`);
    elem.setAttribute('role', 'status');

    const icon = document.createElement('div');
    icon.classList.add('toast-icon');
    elem.appendChild(icon);

    const message = document.createElement('div');
    message.classList.add('toast-message');
    elem.appendChild(message);

    const header = document.createElement('p');
    header.classList.add('bold');
    header.textContent = toast.title;
    message.appendChild(header);

    const btn = document.createElement('button');
    btn.classList.add('toast-close');
    btn.textContent = 'Luk';
    message.appendChild(btn);
    btn.addEventListener('click', () => obs.next({}));

    if (toast.description) {
      const desc = document.createElement('p');
      desc.textContent = toast.description;
      message.appendChild(desc);
    }
    return elem;
  }
}
export interface IToastOptions {
  newToastPosition: 'top' | 'bottom';
}
export interface IToast {
  title: string;
  description: string | null;
  type: 'success' | 'warning' | 'error' | 'info';
  timeout: number | null;
}
export class Toast implements IToast {
  public title: string = '';
  public description: string | null = null;
  public type: 'success' | 'warning' | 'error' | 'info' = 'info';
  public timeout: number | null = null;
}
