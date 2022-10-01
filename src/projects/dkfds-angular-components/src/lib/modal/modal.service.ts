import { ComponentFactoryResolver, ComponentRef, Injectable, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }
  
  // inspiration: https://github.com/angular/components/blob/main/src/material/dialog/dialog.ts
  // public open(component: ComponentType<any>): ModalRef { TODO: @angular/cdk/overlay mangler
  public open(component: Type<any>): ModalRef {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.viewContainerRef.createComponent(factory);
    return new ModalRef(componentRef);
  }

  public openTemplate(component: TemplateRef<any>): ModalRef {
    // const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    // const componentRef = this.viewContainerRef.createComponent(factory);
    return new ModalRef(null!);
  }
}

export class ModalRef {
  public afterClose: Observable<any> = new Subject();

  constructor(
    private component: ComponentRef<any>,
  ) { }
}