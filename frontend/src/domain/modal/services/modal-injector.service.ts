import { Component, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../ui/modal/modal.component';
import { ModalInputComponent } from '../models/modal-input-component.model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalInjectorService {

  constructor() { }

  /**
   * injects modal into given viewContainerRef and projects component into modal
   * handles autoclose when background is clicked
   * @param ref 
   * @param component 
   */
  public createEmbeddedView<C extends ModalInputComponent>(ref: ViewContainerRef, component: Type<C>) {
    const eventDialog = ref.createComponent(component);
    const modal = ref.createComponent(ModalComponent, {
      projectableNodes: [[eventDialog.instance.templateRef.element.nativeElement]]
    });

    modal.instance.oncloseModal.pipe(
      take(1)
    ).subscribe(() => modal.destroy());
  }
}
