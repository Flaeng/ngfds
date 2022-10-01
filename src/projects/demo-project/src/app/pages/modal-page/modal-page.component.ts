import { Component, OnInit } from '@angular/core';
import { ModalService } from 'projects/dkfds-angular-components/src/lib/modal/public-api';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.g.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

}
