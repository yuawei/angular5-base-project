import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalContentComponent } from './modal/modal-content/modalContent.component';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModalWithComponent() {
    const list = ['Open a modal with component', 'Pass your data', 'Do something else', '...'];
    this.bsModalRef = this.modalService.show(ModalContentComponent);
    this.bsModalRef.content.title = 'Modal with component';
    this.bsModalRef.content.list = list;
    setTimeout(
      () => {
        list.push('PROFIT!!!');
      },
      2000);
  }
}
