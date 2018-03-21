import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
})
export class ModalContentComponent {
  public title: string;
  public list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}
}
